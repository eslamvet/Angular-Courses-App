import { UserService } from '@services/user.service';
import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { BASE_HREF } from '@utils/base-href';

export const authenticationGuard: CanMatchFn = (route, segments) => {
  const userService = inject(UserService)
  const router = inject(Router)
  return userService.getUser() ? true : router.parseUrl(BASE_HREF)
};
