import { createContext } from 'react';

// Type
import type { ToolbarContextType } from './types';

export const ToolbarContext = createContext<ToolbarContextType | null>(null);
