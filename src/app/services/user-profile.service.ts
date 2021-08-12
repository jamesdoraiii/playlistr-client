import { Apollo } from 'apollo-angular';
import { AuthService } from '@services/auth.service';
import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(
    protected http: HttpClient,
    private base: BaseService,
    private apollo: Apollo,
    private auth: AuthService
  ) {}
}
