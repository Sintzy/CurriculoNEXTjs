"use client";

import * as React from "react";
import {
  CommandDialog, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator
} from "@/components/ui/command";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);

  /* ⌃J / ⌘J to open dialog */
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  /* ---------------------------------------------------------------------- */

  return (
    <>
      {/* helper hint bar */}
      <p className="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-white p-1
                     text-center text-sm text-muted-foreground print:hidden">
        Press{" "}
        <kbd className="inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5
                        font-mono text-[10px] font-medium text-muted-foreground">
          CONTROL+J
        </kbd>{" "}
        to open the command menu
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* ACTIONS */}
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>

            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.open("/api/resume", "_blank");
              }}
            >
              <span>Open résumé PDF</span>
            </CommandItem>



          </CommandGroup>

          {/* LINKS */}
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
