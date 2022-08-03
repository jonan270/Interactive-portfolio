interface Overlay {
    showOverlay: boolean,
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>,
    childComponent: React.FC<{}>
}

interface ModalContent {
    title: string,
    imagePaths: string[],
    gitLink: string,
    description: string
}