import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

interface SubscriptionProps {
  onSubscribe: () => void;
}

export const Subscription: React.FC<SubscriptionProps> = ({ onSubscribe }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="flex flex-col min-h-full bg-onyx text-white px-6 py-12">
      <div className="flex-1 flex flex-col items-center max-w-md mx-auto w-full">
        
        <div className="text-center mb-12">
          <h2 className="font-light text-3xl text-white mb-4 tracking-wide">
            Unlock Access
          </h2>
          <p className="text-gray-400 font-light text-sm">
            Start your 7-day free trial. Cancel anytime.
          </p>
        </div>

        <div className="w-full space-y-4 mb-10">
          {/* Yearly Plan */}
          <div 
            onClick={() => setSelectedPlan('yearly')}
            className={`relative p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
              selectedPlan === 'yearly' 
                ? 'bg-gradient-to-br from-charcoal to-black border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                : 'bg-black border-gray-800 opacity-60'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-light text-lg tracking-wide text-white">Yearly</span>
              <span className="text-xl font-medium text-white">$97<span className="text-sm font-light text-gray-500">/yr</span></span>
            </div>
            <p className="text-xs text-gray-500 mb-4 font-light">Best value. Save 38%</p>
            <div className="space-y-2">
                <FeatureItem label="Unlimited Video Courses" />
                <FeatureItem label="All Prayer Guides" />
                <FeatureItem label="7-Day Free Trial" />
            </div>
          </div>

          {/* Monthly Plan */}
          <div 
            onClick={() => setSelectedPlan('monthly')}
            className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
              selectedPlan === 'monthly' 
                ? 'bg-gradient-to-br from-charcoal to-black border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                : 'bg-black border-gray-800 opacity-60'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-light text-lg tracking-wide text-white">Monthly</span>
              <span className="text-xl font-medium text-white">$12.99<span className="text-sm font-light text-gray-500">/mo</span></span>
            </div>
          </div>
        </div>

        <div className="w-full mt-auto">
          <Button fullWidth onClick={onSubscribe} variant="primary">
            Start 7-Day Free Trial
          </Button>
          <p className="text-[10px] text-center text-gray-600 mt-6 font-light uppercase tracking-widest">
            Recurring billing • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ label }: { label: string }) => (
    <div className="flex items-center text-sm text-gray-300 font-light">
        <Check size={12} className="text-white mr-3" /> 
        {label}
    </div>
);