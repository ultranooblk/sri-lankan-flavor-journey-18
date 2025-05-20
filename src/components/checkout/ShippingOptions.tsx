
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Package, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  icon: 'standard' | 'express';
}

interface ShippingOptionsProps {
  selectedOption: string;
  onSelectOption: (id: string) => void;
}

const shippingOptions: ShippingOption[] = [
  {
    id: 'standard',
    name: 'Standard Delivery',
    price: 500,
    duration: '3-5 business days',
    icon: 'standard',
  },
  {
    id: 'express',
    name: 'Express Delivery',
    price: 1200,
    duration: '1-2 business days',
    icon: 'express',
  },
];

export const ShippingOptions = ({ selectedOption, onSelectOption }: ShippingOptionsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Shipping Method</h3>
      
      <RadioGroup value={selectedOption} onValueChange={onSelectOption} className="gap-3">
        {shippingOptions.map((option) => (
          <Label
            key={option.id}
            htmlFor={option.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border border-border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors"
          >
            <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
            <div className="flex flex-1 items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                {option.icon === 'express' ? (
                  <Truck className="h-5 w-5 text-primary" />
                ) : (
                  <Package className="h-5 w-5 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium">{option.name}</p>
                <p className="text-sm text-muted-foreground">{option.duration}</p>
              </div>
              <div className="font-medium">
                LKR {option.price.toLocaleString()}
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};

export interface AddressData {
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  phone: string;
}

interface ShippingAddressProps {
  address: AddressData;
  onAddressChange: (field: keyof AddressData, value: string) => void;
}

export const ShippingAddress = ({ address, onAddressChange }: ShippingAddressProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-4">Shipping Address</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName" 
                value={address.fullName} 
                onChange={(e) => onAddressChange('fullName', e.target.value)}
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                value={address.phone} 
                onChange={(e) => onAddressChange('phone', e.target.value)}
                placeholder="+94 7X XXX XXXX"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="addressLine1">Address Line 1</Label>
            <Input 
              id="addressLine1" 
              value={address.addressLine1} 
              onChange={(e) => onAddressChange('addressLine1', e.target.value)}
              placeholder="Street address"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="addressLine2">Address Line 2</Label>
            <Input 
              id="addressLine2" 
              value={address.addressLine2} 
              onChange={(e) => onAddressChange('addressLine2', e.target.value)}
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input 
                id="city" 
                value={address.city} 
                onChange={(e) => onAddressChange('city', e.target.value)}
                placeholder="City"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input 
                id="postalCode" 
                value={address.postalCode} 
                onChange={(e) => onAddressChange('postalCode', e.target.value)}
                placeholder="XXXXX"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
