import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  private numberOfGereneratedIDs = 0;
  private validID = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIDWithPrefix(prefix: string): string {
    if (!prefix || !this.validID.test(prefix)) {
      throw Error('Prefix can not empty');
    }

    const uniqueID = this.generateUniqueID();
    this.numberOfGereneratedIDs++;
    return `${prefix}-${uniqueID}`;
  }

  public getNumberOfGereneratedIDs(): number {
    return this.numberOfGereneratedIDs;
  }

  private generateUniqueID(): string {
    return uuid.v1();
  }

}
