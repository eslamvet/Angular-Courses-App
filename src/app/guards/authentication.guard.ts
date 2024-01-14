import { UserService } from '@services/user.service';
import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';

export const authenticationGuard: CanMatchFn = (route, segments) => {
  const userService = inject(UserService)
  return !!userService.getUser()
};
