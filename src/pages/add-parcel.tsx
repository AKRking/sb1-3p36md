import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import { databases } from '@/lib/appwrite';
import { ID } from 'appwrite';

// ... (keep the existing schema and other imports)

export default function AddParcel() {
  // ... (keep the existing state and form setup)

  const onSubmit = async (data: FormData) => {
    try {
      const newConsignmentId = Math.floor(100000000 + Math.random() * 900000000).toString();

      const parcelData = {
        ...data,
        consignmentId: newConsignmentId,
        createdAt: new Date().toISOString(),
      };

      const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
      const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PARCELS_COLLECTION_ID;

      if (!databaseId || !collectionId) {
        throw new Error('Appwrite database or collection ID is not set');
      }

      const response = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        parcelData
      );

      console.log('Parcel added successfully:', response);
      setConsignmentId(newConsignmentId);
      reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(`Error: ${error.message || 'An unknown error occurred'}`);
    }
  };

  // ... (keep the existing JSX)
}