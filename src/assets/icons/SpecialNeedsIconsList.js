import {
    AdhdIcon,
    AutismIcon,
    BehaviorIcon,
    BlindIcon,
    CommunicationIcon,
    DeafIcon,
    DevelopmentIcon,
    DiseaseIcon,
    IntellectualIcon,
    WheelchairIcon,
} from './PreferencesIcons'

export const SpecialNeedsIconsList = [
    {
        id: 'DEVELOPMENTAL',
        label: 'Trastornos graves del desarrollo ',
        info: 'Limitación en el funcionamiento cognitivo o adaptativo que se inicia en la infancia y produce alteraciones de conducta en diversas áreas de la vida diaria, como el hogar o la escuela.',
        icon: DevelopmentIcon(),
    },
    {
        id: 'VISUAL',
        label: 'Discapacidad visual',
        info: 'Discapacidad sensorial que consiste en la pérdida total o parcial del sentido de la vista. ',
        icon: BlindIcon(),
    },
    {
        id: 'INTELLECTUAL',
        label: 'Discapacidad intelectual',
        info: ' alteración en el desarrollo del ser humano caracterizada por limitaciones significativas tanto en el funcionamiento intelectual como en las conductas adaptativas y que se evidencia antes de los 18 años de edad. ',
        icon: IntellectualIcon(),
    },
    {
        id: 'HEARING',
        label: 'Discapacidad auditiva',
        info: 'Dificultad o la imposibilidad de usar el sentido del oído debido a una pérdida de la capacidad auditiva parcial (hipoacusia) o total (cofosis), y unilateral o bilateral. ',
        icon: DeafIcon(),
    },
    {
        id: 'COMMUNICATION',
        label: 'Trastornos de la comunicación',
        info: 'Trastorno del discurso y del lenguaje que se refieren a problemas en la comunicación y áreas relacionadas, como la función motora oral. Los retrasos y trastornos pueden ir desde la sustitución de sonidos simples a la incapacidad de comprender o utilizar su lengua materna.',
        icon: CommunicationIcon(),
    },
    {
        id: 'PHYSICAL',
        label: 'Discapacidad física',
        info: 'Deficiencia que provoca en el individuo que la padece alguna disfunción en el aparato locomotor.',
        icon: WheelchairIcon(),
    },
    {
        id: 'AUTISM',
        label: 'Trastornos del Espectro Autista',
        info: 'Abarcan un amplio espectro de trastornos que, en su manifestación fenotípica, se caracterizan por deficiencias persistentes en la comunicación social y en la interacción social en diversos contextos, unidas a patrones restrictivos y repetitivos de comportamiento, intereses o actividades.',
        icon: AutismIcon(),
    },
    {
        id: 'CONDUCT',
        label: 'Trastornos graves de conducta',
        info: 'Es una serie de problemas conductuales y emocionales que se presentan en niños y adolescentes. Los problemas pueden involucrar comportamiento desafiante o impulsivo, consumo de drogas o actividad delictiva.',
        icon: BehaviorIcon(),
    },
    {
        id: 'ADHD',
        label: 'Trastorno por Déficit de Atención con/sin Hiperactividad',
        info: 'Trastorno crónico del desarrollo neuropsiquiátrico que afecta el desarrollo y funcionamiento de las funciones ejecutivas.',
        icon: AdhdIcon(),
    },
    {
        id: 'ILLNESS',
        label: 'Enfermedades raras y crónicas',
        info: 'Enfermedades que afectan a una proporción reducida de la población.',
        icon: DiseaseIcon(),
    },
]
