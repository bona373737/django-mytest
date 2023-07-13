# Django Project

### 프로젝트 구조 
```
mytest ──┬─ mytest 
         ├─ templates : project level의 templates(base,header,footer 등 공통레이아웃)
         ├─ static : project level의 static(프로젝트 전체에 적용되는 공통css,scss,js파일)
         └─ apps ──┬─ accounts ──┬─ static 
                   │             ├─ templates
                   │
                   │
                   ├─ home ──────┬─ static 
                                 ├─ templates       
                   
            
```