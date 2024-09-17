// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes/index'; // Import your schema types

export default defineConfig({
  name: 'default',
  title: 'Test Image',
  projectId: '053fpsne',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,  // Add your schemas here
  },
});
