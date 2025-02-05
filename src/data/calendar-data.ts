export type Days = 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado' | 'domingo'

export type CalendarClass = {
  class: string
  time: string
}

export type Calendar = Record<Days, CalendarClass[] | string>

export const calendar: Calendar = {
  lunes: [
    { class: 'Crossfit', time: '9:30' },
    { class: 'Boxeo', time: '10:45' },
    { class: 'Entrenamiento Funcional', time: '16:15' },
    { class: 'Clases dirigidas', time: '17:10' },
    { class: 'Pilates', time: '18:00' },
    { class: 'Nutrición', time: '19:00' },
    { class: 'Crossfit', time: '20:00' },
    { class: 'Boxeo', time: '21:00' },
  ],
  martes: [
    { class: 'Crossfit', time: '9:30' },
    { class: 'Boxeo', time: '10:45' },
    { class: 'Entrenamiento Funcional', time: '16:15' },
    { class: 'Clases dirigidas', time: '17:10' },
    { class: 'Pilates', time: '18:00' },
    { class: 'Nutrición', time: '19:00' },
    { class: 'Crossfit', time: '20:00' },
    { class: 'Boxeo', time: '21:00' },
  ],
  miercoles: [
    { class: 'Crossfit', time: '9:30' },
    { class: 'Boxeo', time: '10:45' },
    { class: 'Entrenamiento Funcional', time: '16:15' },
    { class: 'Clases dirigidas', time: '17:10' },
    { class: 'Pilates', time: '18:00' },
    { class: 'Nutrición', time: '19:00' },
    { class: 'Crossfit', time: '20:00' },
    { class: 'Boxeo', time: '21:00' },
  ],
  jueves: [
    { class: 'Crossfit', time: '9:30' },
    { class: 'Boxeo', time: '10:45' },
    { class: 'Entrenamiento Funcional', time: '16:15' },
    { class: 'Clases dirigidas', time: '17:10' },
    { class: 'Pilates', time: '18:00' },
    { class: 'Nutrición', time: '19:00' },
    { class: 'Crossfit', time: '20:00' },
    { class: 'Boxeo', time: '21:00' },
  ],
  viernes: [
    { class: 'Crossfit', time: '9:30' },
    { class: 'Boxeo', time: '10:45' },
    { class: 'Entrenamiento Funcional', time: '16:15' },
    { class: 'Clases dirigidas', time: '17:10' },
    { class: 'Pilates', time: '18:00' },
    { class: 'Nutrición', time: '19:00' },
    { class: 'Crossfit', time: '20:00' },
    { class: 'Boxeo', time: '21:00' },
  ],
  sabado: 'Cerrado',
  domingo: 'Cerrado',
}
