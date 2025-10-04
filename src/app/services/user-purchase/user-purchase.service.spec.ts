import { TestBed } from "@angular/core/testing";

import { UserPurchaseService } from "./user-purchase.service";

describe("UserPurchaseService", () => {
  let service: UserPurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPurchaseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
