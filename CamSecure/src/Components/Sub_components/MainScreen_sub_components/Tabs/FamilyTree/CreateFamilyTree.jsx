import React, { useState } from 'react';
import { ArrowLeft, Network, Building2, GraduationCap, PlusSquare, Save, QrCode, X, Download } from 'lucide-react';

export default function CreateFamilyTree({ initialData, onBack, onSubmit }) {
  const isEditing = !!initialData;
  const [showQRModal, setShowQRModal] = useState(false);
  
  const [formData, setFormData] = useState(initialData || {
    name: '',
    description: '',
    schoolName: '',
    schoolContact: '',
    hospitalName: '',
    hospitalContact: ''
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

  return (
    <div className="flex-1 w-full p-8 max-w-full mx-auto h-full overflow-y-auto relative">
      
      {/* Header section */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Family Trees
          </button>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
            {isEditing ? 'Edit Family Tree' : 'Create New Family Tree'}
          </h1>
          <p className="text-gray-500 text-sm">Initialize a primary security network and establish institutional contacts for automated emergency routing.</p>
        </div>
        
        {isEditing && (
          <button 
            type="button"
            onClick={() => setShowQRModal(true)}
            className="bg-white border border-gray-200 hover:bg-gray-50 text-[#0f52ba] px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors flex items-center gap-2"
          >
            <QrCode className="w-4 h-4" />
            View QR Code
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-20 max-w-5xl mx-auto">
        
        {/* Core Identity Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <Network className="w-5 h-5 text-[#0f52ba]" />
            <h2 className="text-lg font-semibold text-gray-900">Core Identity</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Tree Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., The Johnsons" 
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Operational Description</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Primary family network for home safety and immediate localized alerts." 
                rows={3}
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Institutional Contacts Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#0f52ba]" />
              <h2 className="text-lg font-semibold text-gray-900">Institutional Emergency Contacts</h2>
            </div>
            <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded">Required</span>
          </div>

          <div className="space-y-8">
            {/* Educational */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#0f52ba]">
                <GraduationCap className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-wide">Educational Institution</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">School Name</label>
                  <input 
                    type="text" 
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="e.g., Oakwood Elementary" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Direct Office Contact</label>
                  <input 
                    type="text" 
                    name="schoolContact"
                    value={formData.schoolContact}
                    onChange={handleChange}
                    placeholder="(555) 012-3456" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Medical */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#CE1126]">
                <PlusSquare className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-wide">Primary Medical Facility</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Hospital Name</label>
                  <input 
                    type="text" 
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    placeholder="e.g., City General Hospital" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Emergency Ward Number</label>
                  <input 
                    type="text" 
                    name="hospitalContact"
                    value={formData.hospitalContact}
                    onChange={handleChange}
                    placeholder="(555) 987-6543" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit"
            className="bg-[#0f52ba] hover:bg-[#0b3d8c] text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Family Tree
          </button>
        </div>

      </form>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowQRModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white rounded-xl shadow-2xl z-10 w-full max-w-sm overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 flex flex-col items-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Network Access QR</h3>
              <p className="text-sm text-gray-500 text-center mb-8">Scan to join the {formData.name} family network directly.</p>
              
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://camsecure.app/join/${formData.id || 'demo'}`} 
                  alt="QR Code" 
                  className="w-48 h-48"
                />
              </div>

              <div className="w-full bg-gray-50 rounded-lg p-3 border border-gray-200 flex items-center justify-between mb-6">
                <span className="text-xs text-gray-500 truncate mr-2 font-mono">
                  https://camsecure.app/join/{formData.id || 'demo'}
                </span>
              </div>

              <button 
                onClick={() => {
                   // Mock download action
                   console.log("Downloading QR code...");
                }}
                className="w-full bg-[#0f52ba] hover:bg-[#0b3d8c] text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download QR Image
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
