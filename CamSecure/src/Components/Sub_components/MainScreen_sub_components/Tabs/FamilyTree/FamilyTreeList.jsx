import React, { useState, useRef, useEffect } from 'react';
import { Plus, MoreVertical, Users, Network, ArrowRight } from 'lucide-react';
import DeleteConfirmModal from '../../../../ui/DeleteConfirmModal.jsx';

export default function FamilyTreeList({ trees, onNavigateCreate, onViewTree, onEditTree, onDeleteTree }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [deleteTreeId, setDeleteTreeId] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    setDeleteTreeId(id);
    setOpenDropdownId(null);
  };

  const confirmDelete = () => {
    if (deleteTreeId) {
      onDeleteTree(deleteTreeId);
      setDeleteTreeId(null);
    }
  };

  const handleEdit = (e, tree) => {
    e.stopPropagation();
    onEditTree(tree);
    setOpenDropdownId(null);
  };

  return (
    <div className="flex-1 w-full p-8 max-w-7xl mx-auto h-full overflow-y-auto relative">
      
      {/* Header section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-1 tracking-tight">My Family Trees</h1>
          <p className="text-gray-500 text-sm">Manage and monitor your connected family networks.</p>
        </div>
        {trees.length > 0 && (
          <button 
            onClick={onNavigateCreate}
            className="bg-[#0f52ba] hover:bg-[#0b3d8c] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create New Tree
          </button>
        )}
      </div>

      {trees.length === 0 ? (
        // Empty State
        <div className="flex flex-col items-center justify-center h-[60vh] bg-white border border-gray-200 border-dashed rounded-xl">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-6">
            <Network className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No Family Trees Found</h2>
          <p className="text-gray-500 text-sm max-w-sm text-center mb-8">
            You haven't set up any family networks yet. Create a family tree to start connecting and monitoring your loved ones.
          </p>
          <button 
            onClick={onNavigateCreate}
            className="bg-[#0f52ba] hover:bg-[#0b3d8c] text-white px-6 py-3 rounded-md text-sm font-semibold shadow-sm transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Family Tree
          </button>
        </div>
      ) : (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={dropdownRef}>
          {trees.map(tree => (
            <div 
              key={tree.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow relative flex flex-col"
            >
              {/* Top Icons */}
              <div className="flex justify-between items-start mb-5">
                <div className="w-10 h-10 bg-[#e8f0fe] rounded text-[#0f52ba] flex items-center justify-center">
                  <Network className="w-5 h-5" />
                </div>
                <div className="relative">
                  <button 
                    onClick={(e) => toggleDropdown(e, tree.id)}
                    className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {openDropdownId === tree.id && (
                    <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                      <button 
                        onClick={(e) => handleEdit(e, tree)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={(e) => handleDeleteClick(e, tree.id)}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & Count */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tree.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-6 font-medium">
                <Users className="w-4 h-4 mr-2" />
                {(tree.members && tree.members.length) || 0} Members Connected
              </div>

              {/* Avatars */}
              <div className="flex -space-x-2 mb-8">
                {/* Mocking avatars based on member count */}
                {tree.members && tree.members.slice(0, 4).map((member, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ))}
                {(!tree.members || tree.members.length === 0) && (
                   <div className="text-xs text-gray-400 italic py-1">No members yet</div>
                )}
                {tree.members && tree.members.length > 4 && (
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">
                    +{tree.members.length - 4}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <span className="text-xs font-semibold text-teal-600 tracking-wide">All Active</span>
                </div>
                <button 
                  onClick={() => onViewTree(tree.id)}
                  className="flex items-center gap-1 text-sm font-semibold text-[#0f52ba] hover:text-[#0b3d8c] transition-colors"
                >
                  View Tree <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}

          {/* Add New Card Slot */}
          <button 
            onClick={onNavigateCreate}
            className="bg-transparent border-2 border-gray-200 border-dashed rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all text-center min-h-[280px]"
          >
            <div className="w-12 h-12 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-500">
              <Plus className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Add New Tree</h3>
            <p className="text-sm text-gray-500 max-w-[200px]">Create a new network to monitor another group of family members.</p>
          </button>

        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTreeId && (
        <DeleteConfirmModal 
          title="Delete Family Tree"
          message="Are you sure you want to delete this family tree? All associated members and settings will be permanently removed. This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTreeId(null)}
        />
      )}
    </div>
  );
}
