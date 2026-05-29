import React, { useState, useRef, useEffect } from 'react';
import { UserPlus, Pencil, MoreVertical, ChevronRight } from 'lucide-react';
import DeleteConfirmModal from '../../../../ui/DeleteConfirmModal.jsx';

export default function FamilyMembersList({ tree, onBack, onNavigateAddMember, onEditMember, onDeleteMember }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [deleteMemberId, setDeleteMemberId] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e, id) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleDeleteClick = (id) => {
    setDeleteMemberId(id);
    setOpenDropdownId(null);
  };

  const confirmDelete = () => {
    if (deleteMemberId) {
      onDeleteMember(deleteMemberId);
      setDeleteMemberId(null);
    }
  };

  const handleEdit = (member) => {
    onEditMember(member);
    setOpenDropdownId(null);
  };

  if (!tree) return null;

  return (
    <div className="flex-1 w-full p-8 max-w-7xl mx-auto h-full overflow-y-auto relative">
      
      {/* Breadcrumb & Header */}
      <div className="mb-8">
        <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">
          <button onClick={onBack} className="hover:text-gray-900 transition-colors">
            {tree.name}
          </button>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#0f52ba]">Family Members</span>
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Family Members</h1>
        <p className="text-gray-500 text-sm">Manage registered facial recognition profiles, identifying traits, and access clearances for the primary household.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" ref={dropdownRef}>
        
        {/* Add New Member Card */}
        <button 
          onClick={onNavigateAddMember}
          className="bg-transparent border border-gray-200 border-dashed rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white hover:border-gray-300 transition-all text-center min-h-[320px]"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-500">
            <UserPlus className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Add New Member</h3>
          <p className="text-sm text-gray-500 max-w-[200px]">Register a new profile for facial recognition tracking.</p>
        </button>

        {/* Member Cards */}
        {tree.members && tree.members.map(member => (
          <div key={member.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow relative flex flex-col min-h-[320px]">
            
            {/* Status Badge */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-gray-700 flex items-center gap-1.5 shadow-sm border border-gray-100 z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
              Active
            </div>

            {/* Photo Area */}
            <div className="h-48 bg-gray-100 relative overflow-hidden">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=256`} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-[#0f52ba] leading-tight truncate pr-2">{member.name}</h3>
                
                {/* Edit / Dropdown Menu */}
                <div className="relative">
                   <button 
                     onClick={(e) => toggleDropdown(e, member.id)}
                     className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                   >
                     <Pencil className="w-4 h-4" />
                   </button>
                   {openDropdownId === member.id && (
                    <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
                      <button 
                        onClick={() => handleEdit(member)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(member.id)}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-4">{member.occupation ? 'Primary Resident' : 'Dependent / Child'}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {member.occupation && (
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                    {member.occupation}
                  </span>
                )}
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                  {/* Calculate rough age if dob is provided, else just show standard text */}
                  Age: {member.dob ? Math.floor((new Date() - new Date(member.dob).getTime()) / 3.15576e+10) || 'N/A' : 'N/A'}
                </span>
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* Delete Confirmation Modal */}
      {deleteMemberId && (
        <DeleteConfirmModal 
          title="Delete Family Member"
          message="Are you sure you want to delete this family member? Their facial recognition profile and data will be permanently removed."
          onConfirm={confirmDelete}
          onCancel={() => setDeleteMemberId(null)}
        />
      )}

    </div>
  );
}
