import React, { useState } from 'react';
import { ChevronRight, Camera, Save, UserPlus } from 'lucide-react';

export default function AddFamilyMember({ tree, initialData, onBack, onSubmit }) {
  const isEditing = !!initialData;
  
  const [formData, setFormData] = useState(initialData || {
    name: '',
    dob: '',
    gender: '',
    occupation: '',
    traits: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '') return;
    onSubmit(formData);
  };

  if (!tree) return null;

  return (
    <div className="flex-1 w-full p-8 max-w-full mx-auto h-full overflow-y-auto">
      
      {/* Breadcrumb & Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide mb-6">
          <span>{tree.name.toUpperCase()}</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#0f52ba]">
            {isEditing ? 'Edit Family Member' : 'Add Family Member'}
          </span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-5xl mx-auto">
        <form onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Col - Photo Upload Placeholder */}
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Reference Photo</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center justify-center h-[280px] p-6 text-center cursor-pointer hover:bg-gray-100 transition-colors">
                <Camera className="w-10 h-10 text-gray-400 mb-4" />
                <span className="text-sm font-semibold text-gray-700 mb-1">Click to upload biometrics</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">JPG, PNG (MAX 5MB)</span>
              </div>
            </div>

            {/* Right Col - Form Fields */}
            <div className="md:col-span-8 space-y-6">
              
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Date of Birth</label>
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Gender</label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="" disabled>Select classification</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Occupation</label>
                <input 
                  type="text" 
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Identifying Traits / Description</label>
                <textarea 
                  name="traits"
                  value={formData.traits}
                  onChange={handleChange}
                  placeholder="Physical markers, typical clothing, medical notes..." 
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 resize-none"
                ></textarea>
              </div>

            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end gap-4">
            <button 
              type="button"
              onClick={onBack}
              className="px-6 py-2.5 rounded-md text-sm font-bold text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors uppercase tracking-wide"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-[#0f52ba] hover:bg-[#0b3d8c] text-white px-6 py-2.5 rounded-md text-sm font-bold transition-colors flex items-center gap-2 uppercase tracking-wide"
            >
              {isEditing ? <Save className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
              {isEditing ? 'Save Family Member' : 'Create Family Member'}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
