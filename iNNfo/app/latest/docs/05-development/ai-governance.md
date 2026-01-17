# AI Governance & Synchronization

Ensuring that the AI Chatbot's capabilities remain synchronized with the application's core logic is critical for a consistent user experience. We use an automated governance mechanism to strictly enforce this synchronization.

## The Problem
As the application evolves, developers add new methods to the Store (e.g., `createCluster`, `archiveProject`). If corresponding AI actions are not added to `definitions.ts`, the AI will be unaware of these new capabilities, leading to "hallucinations" or inability to perform tasks that users expect.

## The Solution: `verify-ai-actions.ts`

We have implemented a governance script located at:
`app/scripts/verify-ai-actions.ts`

### How it Works
1.  **Introspection**: The script inspects the `createDataSlice` (and potentially others) to list all available state-modifying methods.
2.  **Mapping**: It checks a strict mapping definition within the script that links Store Methods -> AI Action IDs.
3.  **Verification**: It verifies that every mapped AI Action ID actually exists in `app/src/lib/actions/definitions.ts`.
4.  **Enforcement**: If any Store method is not mapped (or falls under an exclusion list), the script fails (Exit Code 1).

### Running the Audit
You can run the governance audit manually via the terminal:

```bash
npx ts-node app/scripts/verify-ai-actions.ts
```

### Development Workflow
When you add a new feature to the application:

1.  **Implement the Store Logic**: Add your method to `createDataSlice.ts` (e.g., `reorderProperties`).
2.  **Implement the AI Action**: Add the corresponding tool definition to `app/src/lib/actions/definitions.ts`.
3.  **Update the Governance Map**: Open `app/scripts/verify-ai-actions.ts` and add the mapping:
    ```typescript
    'reorderProperties': 'class.reorder_properties',
    ```
4.  **Verify**: Run the script to ensure everything is green.

### Error Handling
If the AI attempts an action that is not valid or fails during execution, the system now returns structured error feedback (instead of crashing or silently failing). The `AIChatPanel` displays these errors clearly to the user:
- **Plan Execution Failed**: No changes were staged.
- **Plan Partially Executed**: Some changes worked, others failed.
