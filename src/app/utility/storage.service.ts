import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }
}
