/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/OludWX0stNz
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

/** Add border radius CSS variable to your global CSS:

:root {
  --radius: 0.5rem;
}
**/
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { usePocketBase } from "@/contexts/pocketBaseContext"
import { useNavigate } from "@tanstack/react-router"

export function Settings() {
  const navigate = useNavigate()
  const signOut = usePocketBase().signOut
  return (
    <main className="w-full px-4 py-6 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="px-4 py-6 sm:px-0">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Edit your profile details here.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Your email" type="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="profile-picture">Profile Picture</Label>
              <Input id="profile-picture" type="file" />
            </div>
            <Button className="ml-auto">Edit Profile</Button>
          </CardContent>
        </Card>
        <Card className="w-full max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your account password here.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" placeholder="Current password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" placeholder="New password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" placeholder="Confirm new password" type="password" />
            </div>
            <Button className="ml-auto">Update</Button>
          </CardContent>
        </Card>
        <Card className="w-full max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Manage your notification preferences.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-alerts">Email Alerts</Label>
              <Switch id="email-alerts" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="survey-reminders">Survey Reminders</Label>
              <Switch id="survey-reminders" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="promotional-offers">Promotional Offers</Label>
              <Switch id="promotional-offers" />
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Account Management</CardTitle>
            <CardDescription>Manage your account settings.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <Button className="w-full" variant="outline">
              Deactivate Account
            </Button>
            <Button className="w-full" onClick={()=>{
              signOut()
              navigate({to: "/"})
            }}>Logout</Button>
          </CardContent>
        </Card>
        <Card className="w-full max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Language</CardTitle>
            <CardDescription>Select your preferred language.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger className="text-gray-500 dark:text-gray-400">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}