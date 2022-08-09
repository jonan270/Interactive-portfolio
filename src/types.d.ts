declare module "*.pdf";

interface Overlay {
    showOverlay: boolean,
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>,
    childComponent: React.FC<{}>,
    triggerOverlay: (component: React.FC<{}>) => void
}

interface Links {
    gitLink: string,
    linkedinLink: string
}