import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "@tanstack/react-router"
import { usePocketBase } from "@/contexts/pocketBaseContext";
import { useState } from "react";

/**
* @see https://v0.dev/t/IZtMYaQUTGC
*/
export function SignIn() {
  const pocketBase = usePocketBase();
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSignInSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    await pocketBase.signIn(email, password)
    if(pocketBase.pocketBase.authStore.isValid){
      navigate({to: "/", replace: true})
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form action="#" className="mt-8 space-y-6" method="POST">
          <input name="remember" type="hidden" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label className="sr-only" htmlFor="email-address">
                Email address
              </Label>
              <Input
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Email address"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                id="remember_me"
                name="remember_me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Label className="ml-2 block text-sm text-gray-900" htmlFor="remember_me">
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
              onClick={handleSignInSubmit}
            >
              Sign in
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link className="font-medium text-indigo-600 hover:text-indigo-500" to="/signUp">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  )
}
