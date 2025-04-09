#!/bin/bash

# Install Supabase CLI globally
npm install -g supabase

# Generate types
npx supabase gen types typescript --project-id "fsdyovuyombrhxkcgcdk" --schema public > src/types/supabase.ts

echo "Types generated successfully!" 