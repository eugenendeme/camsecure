import React, { useState, useEffect } from 'react';
import FamilyTreeList from './FamilyTreeList.jsx';
import CreateFamilyTree from './CreateFamilyTree.jsx';
import FamilyMembersList from './FamilyMembersList.jsx';
import AddFamilyMember from './AddFamilyMember.jsx';
import { SuccessMessage } from '../../../../ui/SuccessMessage.jsx';

export default function FamilyTreeRoot() {
  const [currentView, setCurrentView] = useState('LIST');
  const [selectedTreeId, setSelectedTreeId] = useState(null);
  const [editingTreeData, setEditingTreeData] = useState(null);
  const [editingMemberData, setEditingMemberData] = useState(null);
  const [trees, setTrees] = useState([]);

  // Toast State
  const [toastMessage, setToastMessage] = useState(null);
  const [toastExiting, setToastExiting] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const data = localStorage.getItem('camsecure_family_data');
    if (data) {
      try {
        setTrees(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse family data", e);
      }
    }
  }, []);

  // Save to local storage whenever trees state changes
  useEffect(() => {
    localStorage.setItem('camsecure_family_data', JSON.stringify(trees));
  }, [trees]);

  const showToast = (message) => {
    setToastMessage(message);
    setToastExiting(false);

    // Auto dismiss
    setTimeout(() => {
      setToastExiting(true);
      setTimeout(() => {
        setToastMessage(null);
      }, 500); // Wait for transition
    }, 4000);
  };

  const addTree = (newTree) => {
    setTrees([...trees, { ...newTree, id: crypto.randomUUID(), members: [] }]);
    showToast("Family Tree saved successfully. QR Code generated.");
    setCurrentView('LIST');
  };

  const editTree = (updatedTree) => {
    setTrees(trees.map(t => t.id === updatedTree.id ? updatedTree : t));
    showToast("Family Tree updated successfully.");
    setCurrentView('LIST');
    setEditingTreeData(null);
  };

  const deleteTree = (id) => {
    setTrees(trees.filter(t => t.id !== id));
    showToast("Family Tree deleted.");
  };

  const addMemberToTree = (treeId, memberData) => {
    setTrees(trees.map(tree => {
      if (tree.id === treeId) {
        return {
          ...tree,
          members: [...(tree.members || []), { ...memberData, id: crypto.randomUUID() }]
        };
      }
      return tree;
    }));
    showToast("Family Member added successfully.");
    setCurrentView('VIEW_TREE');
  };

  const editMember = (treeId, updatedMember) => {
    setTrees(trees.map(tree => {
      if (tree.id === treeId) {
        return {
          ...tree,
          members: tree.members.map(m => m.id === updatedMember.id ? updatedMember : m)
        };
      }
      return tree;
    }));
    showToast("Family Member updated successfully.");
    setCurrentView('VIEW_TREE');
    setEditingMemberData(null);
  };

  const deleteMember = (treeId, memberId) => {
    setTrees(trees.map(tree => {
      if (tree.id === treeId) {
        return {
          ...tree,
          members: tree.members.filter(m => m.id !== memberId)
        };
      }
      return tree;
    }));
    showToast("Family Member deleted.");
  };

  const handleEditTreeNavigation = (tree) => {
    setEditingTreeData(tree);
    setCurrentView('CREATE_TREE');
  };

  const handleEditMemberNavigation = (member) => {
    setEditingMemberData(member);
    setCurrentView('ADD_MEMBER');
  };

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col relative overflow-hidden">
      <SuccessMessage message={toastMessage} isExiting={toastExiting} />

      {currentView === 'LIST' && (
        <div className="w-full h-full animate-in fade-in zoom-in-[0.98] duration-300 ease-out flex-1 flex flex-col">
          <FamilyTreeList
            trees={trees}
            onNavigateCreate={() => {
              setEditingTreeData(null);
              setCurrentView('CREATE_TREE');
            }}
            onViewTree={(id) => {
              setSelectedTreeId(id);
              setCurrentView('VIEW_TREE');
            }}
            onEditTree={handleEditTreeNavigation}
            onDeleteTree={deleteTree}
          />
        </div>
      )}

      {currentView === 'CREATE_TREE' && (
        <div className="w-full h-full animate-in fade-in slide-in-from-right-4 duration-300 ease-out flex-1 flex flex-col overflow-y-auto">
          <CreateFamilyTree
            initialData={editingTreeData}
            onBack={() => setCurrentView('LIST')}
            onSubmit={editingTreeData ? editTree : addTree}
          />
        </div>
      )}

      {currentView === 'VIEW_TREE' && (
        <div className="w-full h-full animate-in fade-in zoom-in-[0.98] duration-300 ease-out flex-1 flex flex-col">
          <FamilyMembersList
            tree={trees.find(t => t.id === selectedTreeId)}
            onBack={() => {
              setSelectedTreeId(null);
              setCurrentView('LIST');
            }}
            onNavigateAddMember={() => {
              setEditingMemberData(null);
              setCurrentView('ADD_MEMBER');
            }}
            onEditMember={handleEditMemberNavigation}
            onDeleteMember={(memberId) => deleteMember(selectedTreeId, memberId)}
          />
        </div>
      )}

      {currentView === 'ADD_MEMBER' && (
        <div className="w-full h-full animate-in fade-in slide-in-from-right-4 duration-300 ease-out flex-1 flex flex-col overflow-y-auto">
          <AddFamilyMember
            tree={trees.find(t => t.id === selectedTreeId)}
            initialData={editingMemberData}
            onBack={() => setCurrentView('VIEW_TREE')}
            onSubmit={(memberData) => editingMemberData ? editMember(selectedTreeId, memberData) : addMemberToTree(selectedTreeId, memberData)}
          />
        </div>
      )}
    </div>
  );
}
