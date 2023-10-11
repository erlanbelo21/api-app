import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarUsuarioPage } from './alterar-usuario.page';

describe('AlterarUsuarioPage', () => {
  let component: AlterarUsuarioPage;
  let fixture: ComponentFixture<AlterarUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
