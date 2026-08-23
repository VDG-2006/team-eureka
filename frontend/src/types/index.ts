// src/types/index.ts

export type AuraTier = 'Spark' | 'Ember' | 'Flame' | 'Blaze' | 'Aurora';
export type NodeStatus = 'locked' | 'unlocked' | 'in_progress' | 'completed';

export interface LearnerProfile {
  id: string; // Clerk user ID
  skill_vector: Record<string, number>;
  completed_nodes: string[];
  aura_points: number;
  aura_tier: AuraTier;
  streak_days: number;
  last_active: string;
}

export interface SkillNode {
  id: string;
  domain: string;
  label: string;
  difficulty: number;
  prerequisite_ids: string[];
  linked_content_ids: string[];
}

export interface LearnerNodeState {
  learner_id: string;
  node_id: string;
  status: NodeStatus;
  theta_estimate: number;
  last_checkpoint_score: number;
  attempts: number;
}

export interface AuraEvent {
  id: string;
  learner_id: string;
  node_id: string;
  type: 'checkpoint_pass' | 'milestone_complete' | 'path_complete' | 'streak_bonus';
  points_awarded: number;
  breakdown: any; // JSON object for UI toasts
  created_at: string;
}