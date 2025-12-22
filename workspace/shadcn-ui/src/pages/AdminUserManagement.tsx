import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'user' | 'admin' | 'superadmin';
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
}

const AdminUserManagement = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { tokens } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'user' as const,
    isActive: true,
    password: ''
  });

  useEffect(() => {
    if (userId && userId !== 'new') {
      fetchUser();
    }
  }, [userId]);

  const authFetch = async (path: string, options: any = {}) => {
    const response = await fetch(`http://localhost:5000/api${path}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens?.accessToken}`,
        ...options.headers
      }
    });
    if (!response.ok) throw new Error('API request failed');
    return response.json();
  };

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await authFetch(`/admin/users/${userId}`);
      setUser(res.data);
      setFormData({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        role: res.data.role,
        isActive: res.data.isActive,
        password: ''
      });
    } catch (error) {
      toast.error('Failed to fetch user');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (userId === 'new' && !formData.password) {
      toast.error('Password is required for new users');
      return;
    }

    try {
      setSaving(true);
      
      if (userId === 'new') {
        await authFetch('/admin/users', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        toast.success('User created successfully');
      } else {
        const updateData = { ...formData };
        if (!updateData.password) delete updateData.password;
        
        await authFetch(`/admin/users/${userId}`, {
          method: 'PUT',
          body: JSON.stringify(updateData)
        });
        toast.success('User updated successfully');
      }
      
      navigate('/admin');
    } catch (error) {
      toast.error('Failed to save user');
    } finally {
      setSaving(false);
    }
  };

  const handleResetPassword = async () => {
    if (!formData.password) {
      toast.error('Please enter a new password');
      return;
    }

    try {
      setSaving(true);
      await authFetch(`/admin/users/${userId}/reset-password`, {
        method: 'POST',
        body: JSON.stringify({ newPassword: formData.password })
      });
      toast.success('Password reset successfully');
      setFormData({ ...formData, password: '' });
    } catch (error) {
      toast.error('Failed to reset password');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/admin')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
          <h1 className="text-2xl font-bold">
            {userId === 'new' ? 'Create New User' : 'Edit User'}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>
              {userId === 'new' ? 'Create a new user account' : 'Update user details'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Role *</label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.isActive ? 'active' : 'inactive'}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.value === 'active' })}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {userId === 'new' ? 'Password *' : 'New Password (leave blank to keep current)'}
                </label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder={userId === 'new' ? 'Enter password' : 'Leave blank to keep current password'}
                  required={userId === 'new'}
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save User
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminUserManagement;
