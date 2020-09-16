import { nanoid } from 'nanoid';

export const generateComponentId = (keyLength = 5) => `C_${nanoid(keyLength)}`;