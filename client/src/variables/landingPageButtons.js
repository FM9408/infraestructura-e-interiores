

export const LandingPageButtonsVar = ({ navigate }) => {
    const buttons = [
        {
            title: 'Parte 1',
            action: () => navigate('/parte1')
        },
        {
            title: 'Parte 2',
            action: () => navigate('/parte2')
        }
    ]

    return buttons
}