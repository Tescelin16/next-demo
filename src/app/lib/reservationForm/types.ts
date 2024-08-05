export interface PersonaFormValues {
    name: string;
    lastName: string;
    email: string;
    phone: number;
    documentType: string;
    document: string;
    birthDate: string;
    pickUp: string;
  }

export interface ReservationFormValues {
    excursion: string;
    date: string;
    agenciaId: string;
    prestadorId: string;
    personas: PersonaFormValues[];
    pax: number;
    from: string;
    to: string;
    observation: string;
  }