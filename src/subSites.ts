const subSites = [
    {
        title: 'Ryzyko sercowo-naczyniowe',
        icon: '',
    },
    {
        title: 'Rodzaj i dawka statyny',
        icon: '',
    },
    {
        title: 'Kalkulator stężeń',
        icon: '',
    },
    {
        title: 'Wyniki',
        icon: '',
    },
    {
        title: 'Aktualności',
        icon: '',
    },
    {
        title: 'Mój profil',
        icon: '',
    },
    {
        title: 'Kontakt',
        icon: '',
    },
    {
        title: 'Pomoc',
        icon: '',
    },
    {
        title: 'Polityka prywatności',
        icon: '',
    },
    {
        title: 'Rodo',
        icon: '',
    },
];

function getPath(title: string): string {
    return (
        '/' + title
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replaceAll(' ', '-')
                .toLowerCase()
    )
}

export default subSites;
export {getPath};