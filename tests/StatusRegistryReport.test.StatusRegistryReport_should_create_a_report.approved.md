# Review and check your Statuses

## About this file

This file was created by the Obsidian Tasks plugin (version x.y.z) to help visualise the task statuses in this vault.

If you change the Tasks status settings, you can get an updated report by:

- Going to `Settings` -> `Tasks`.
- Clicking on `Review and check your Statuses`.

You can delete this file any time.

## Status Settings

<!--
Switch to Live Preview or Reading Mode to see the table.
If there are any Markdown formatting characters in status names, such as '*' or '_',
Obsidian may only render the table correctly in Reading Mode.
-->

These are the status values in the Core and Custom statuses sections.

| Status Symbol | Next Status Symbol | Status Name | Status Type |
| ----- | ----- | ----- | ----- |
| `space` | `x` | Todo | `TODO` |
| `x` | `space` | Done | `DONE` |
| `/` | `x` | In Progress | `IN_PROGRESS` |
| `-` | `space` | Cancelled | `CANCELLED` |
| `Q` | `A` | Question | `NON_TASK` |
| `A` | `Q` | Answer | `NON_TASK` |
| `` | `` |  | `TODO` |

## Loaded Settings

<!-- Switch to Live Preview or Reading Mode to see the diagram. -->

These are the settings actually used by Tasks.

```mermaid
flowchart LR
1["'Todo'<br>[ ] -> [x]<br>(TODO)"]
2["'Done'<br>[x] -> [ ]<br>(DONE)"]
3["'In Progress'<br>[/] -> [x]<br>(IN_PROGRESS)"]
4["'Cancelled'<br>[-] -> [ ]<br>(CANCELLED)"]
5["'Question'<br>[Q] -> [A]<br>(NON_TASK)"]
6["'Answer'<br>[A] -> [Q]<br>(NON_TASK)"]
1 --> 2
2 --> 1
3 --> 2
4 --> 1
5 --> 6
6 --> 5
```
