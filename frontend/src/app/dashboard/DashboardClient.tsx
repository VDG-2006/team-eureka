"use client";

import React from 'react';
import InteractiveDAG from '@/components/graph/InteractiveDAG';
import NodeDrawer from '@/components/graph/NodeDrawer';
import DevTools from '@/components/ui/DevTools';
import { useStore } from '@/lib/store';

export default function DashboardClient() {
  const selectedNodeId = useStore((state) => state.selectedNodeId);
  const setSelectedNodeId = useStore((state) => state.setSelectedNodeId);

  return (
    <>
      <div className="absolute inset-0 z-0 bg-[#f3f3f1]">
        <InteractiveDAG onNodeSelect={(id) => setSelectedNodeId(id)} />
      </div>
      
      {/* Detail Drawer Sidebar */}
      <NodeDrawer nodeId={selectedNodeId} onClose={() => setSelectedNodeId(null)} />

      {/* Hidden Dev Tools (Ctrl+Shift+X) */}
      <DevTools />
    </>
  );
}