import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPlatPage } from './detail-plat.page';

describe('DetailPlatPage', () => {
  let component: DetailPlatPage;
  let fixture: ComponentFixture<DetailPlatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
