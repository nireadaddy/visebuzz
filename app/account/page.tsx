"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Lock, CreditCard, Bell } from 'lucide-react';

export default function AccountPage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  return (
    <div className="gradient-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          Your Account
        </h1>

        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">{name}</CardTitle>
                <CardDescription className="text-gray-500">{email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="profile" className="text-sm">Profile</TabsTrigger>
                <TabsTrigger value="security" className="text-sm">Security</TabsTrigger>
                <TabsTrigger value="billing" className="text-sm">Billing</TabsTrigger>
                <TabsTrigger value="notifications" className="text-sm">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" />
                  </div>
                  <Button className="w-full btn-gradient">Save Changes</Button>
                </form>
              </TabsContent>
              <TabsContent value="security">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="mt-1" />
                    </div>
                    <Button className="w-full btn-gradient">Update Password</Button>
                  </form>
                </div>
              </TabsContent>
              <TabsContent value="billing">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Billing Information</h3>
                  <p className="text-gray-500">Your current plan: <span className="font-semibold text-blue-600">Pro</span></p>
                  <Button className="w-full btn-gradient">Upgrade Plan</Button>
                  <h4 className="text-md font-semibold text-gray-900 mt-6">Payment Method</h4>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <CreditCard className="h-6 w-6 text-gray-400 mr-2" />
                      <span className="text-gray-700">•••• •••• •••• 4242</span>
                    </div>
                    <Button variant="outline">Edit</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email Notifications</span>
                      <Button variant="outline" size="sm">
                        <Bell className="h-4 w-4 mr-2" />
                        Manage
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Push Notifications</span>
                      <Button variant="outline" size="sm">
                        <Bell className="h-4 w-4 mr-2" />
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Last updated: May 15, 2023</p>
            <Button variant="outline">Log Out</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}