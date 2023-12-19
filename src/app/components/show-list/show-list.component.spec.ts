import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShowsListComponent } from './show-list.component'

describe('ShowListComponent', () => {
  let component: ShowsListComponent
  let fixture: ComponentFixture<ShowsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowsListComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ShowsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})