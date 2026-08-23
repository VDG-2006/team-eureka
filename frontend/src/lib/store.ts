import { create } from 'zustand';
import { LearnerProfile, LearnerNodeState, AuraEvent } from '@/types';

interface GlobalState {
  // Learner Profile State
  profile: LearnerProfile | null;
  setProfile: (profile: LearnerProfile) => void;
  
  // DAG Node State
  nodeStates: Record<string, LearnerNodeState>;
  updateNodeState: (nodeId: string, newState: Partial<LearnerNodeState>) => void;
  
  // Gamification (Aura Ledger)
  auraEvents: AuraEvent[];
  addAuraEvent: (event: AuraEvent) => void;
  
  // UI State
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
}

export const useStore = create<GlobalState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),

  nodeStates: {},
  updateNodeState: (nodeId, newState) => 
    set((state) => ({
      nodeStates: {
        ...state.nodeStates,
        [nodeId]: { ...state.nodeStates[nodeId], ...newState } as LearnerNodeState
      }
    })),

  auraEvents: [],
  addAuraEvent: (event) => 
    set((state) => ({
      auraEvents: [event, ...state.auraEvents],
      profile: state.profile ? {
        ...state.profile,
        aura_points: state.profile.aura_points + event.points_awarded
      } : null
    })),

  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
}));