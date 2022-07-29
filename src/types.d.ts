interface Overlay {
    showOverlay: boolean,
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>
    content: ModalContent
}

interface ModalContent {
    title: string,
    imagePaths: string[],
    gitLink: string,
    description: string
}