import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SidebarDrawerContextProps = UseDisclosureReturn;

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarDrawerContextProps>(
  {} as SidebarDrawerContextProps
);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useDrawer = () => useContext(SidebarContext);
