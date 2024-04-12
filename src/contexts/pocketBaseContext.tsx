import { TypedPocketBase, UsersResponse } from "@/pocketbase-types";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import PocketBase, { RecordAuthResponse } from "pocketbase";
import ms from "ms";
import { jwtDecode } from "jwt-decode";
import { useInterval } from "usehooks-ts";
import { POCKETBASE_BASE_URL } from "@/pocketBase";

const fiveMinutesInMs = ms("5 minutes");
const twoMinutesInMs = ms("2 minutes");

export type PocketBaseContextType = {
    pocketBase: TypedPocketBase,
    signUp: (email: string, password: string) => Promise<UsersResponse>,
    signIn: (email: string, password: string) => Promise<RecordAuthResponse<UsersResponse>>,
    signOut: () => void,
}

const pocketBaseContext = createContext<PocketBaseContextType>({});

export const PocketBaseProvider = ({ children }: { children: React.ReactNode }) => {

    const pocketBase: TypedPocketBase = useMemo(() => new PocketBase(POCKETBASE_BASE_URL), [])
    const [token, setToken] = useState(pocketBase.authStore.token);
    const [user, setUser] = useState(pocketBase.authStore.model);

    useEffect(() => {
        return pocketBase.authStore.onChange((token, model) => {
          setToken(token);
          setUser(model);
        });
    }, []);

    const signUp = useCallback(async (email: string, password: string) => {
        return await pocketBase
          .collection("users")
          .create({ email, password, passwordConfirm: password });
    }, []);

    const signIn = useCallback(async (email: string, password: string) => {
        return await pocketBase.collection("users").authWithPassword(email, password);
    }, []);

    const signOut = useCallback(() => {
        pocketBase.authStore.clear();
    }, []);

    const refreshSession = useCallback(async () => {
        if (!pocketBase.authStore.isValid) return;
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp!;
        const expirationWithBuffer = (decoded.exp! + fiveMinutesInMs) / 1000;
        if (tokenExpiration < expirationWithBuffer) {
          await pocketBase.collection("users").authRefresh();
        }
      }, [token]);

    useInterval(refreshSession, token ? twoMinutesInMs : null);

    return (
        <pocketBaseContext.Provider value={{ pocketBase, signUp: signUp, signIn: signIn, signOut: signOut }}>
            {children}
        </pocketBaseContext.Provider>
    )
}

export const usePocketBase = () => useContext(pocketBaseContext);
