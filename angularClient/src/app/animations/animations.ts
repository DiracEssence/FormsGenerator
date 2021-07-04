import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [

    transition('LoginPage <=> MainPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: '0'
        })
      ]),
      query(':enter', [
        style({ opacity: '0' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease', style({ opacity: '0' }))
        ]),
        query(':enter', [
          animate('600ms ease', style({ opacity: '1' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('LoginPage => RegisterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: '0.5'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('RegisterPage => LoginPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: '0.5'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

  ]);