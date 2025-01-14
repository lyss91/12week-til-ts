# TypeScript 컴파일러 옵션 설정하기

## 1. tsconfig.json 파일 생성

- `tsc --init` 명령어로 tsconfig.json 파일 생성
- 생성된 tsconfig.json 파일 내용

```json
{
  "compilerOptions": {
    /* tsconfig 파일에 대해 자세히 알아보려면 https://aka.ms/tsconfig 를 방문하세요 */

    /* 프로젝트 설정 */
    // "incremental": true,                              /* 프로젝트의 증분 컴파일을 위해 .tsbuildinfo 파일을 저장합니다. */
    // "composite": true,                                /* 프로젝트 참조와 함께 사용할 수 있는 제약 조건을 활성화합니다. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* 증분 컴파일 파일인 .tsbuildinfo의 경로를 지정합니다. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* 복합 프로젝트를 참조할 때 선언 파일 대신 소스 파일을 선호하는 것을 비활성화합니다. */
    // "disableSolutionSearching": true,                 /* 편집 시 다중 프로젝트 참조 검사에서 프로젝트를 제외합니다. */
    // "disableReferencedProjectLoad": true,             /* TypeScript가 자동으로 로드하는 프로젝트 수를 줄입니다. */

    /* 언어 및 환경 설정 */
    "target": "es2016" /* 출력될 JavaScript의 버전과 호환되는 라이브러리 선언을 포함합니다. */,
    // "lib": [],                                        /* 대상 런타임 환경을 설명하는 번들 라이브러리 선언 파일 세트를 지정합니다. */
    // "jsx": "preserve",                                /* 생성될 JSX 코드를 지정합니다. */
    // "experimentalDecorators": true,                   /* 레거시 실험적 데코레이터에 대한 실험적 지원을 활성화합니다. */
    // "emitDecoratorMetadata": true,                    /* 소스 파일의 데코레이터 선언에 대한 디자인-타입 메타데이터를 내보냅니다. */
    // "jsxFactory": "",                                 /* React JSX 출력을 대상으로 할 때 사용되는 JSX 팩토리 함수를 지정합니다 (예: 'React.createElement' 또는 'h'). */
    // "jsxFragmentFactory": "",                         /* React JSX 출력을 대상으로 할 때 조각에 사용되는 JSX Fragment 참조를 지정합니다 (예: 'React.Fragment' 또는 'Fragment'). */
    // "jsxImportSource": "",                            /* 'jsx: react-jsx*' 사용 시 JSX 팩토리 함수를 가져오는데 사용되는 모듈 지정자를 지정합니다. */
    // "reactNamespace": "",                             /* 'createElement'를 호출하는 객체를 지정합니다. 'react' JSX 출력을 대상으로 할 때만 적용됩니다. */
    // "noLib": true,                                    /* 기본 lib.d.ts를 포함한 모든 라이브러리 파일의 포함을 비활성화합니다. */
    // "useDefineForClassFields": true,                  /* ECMAScript 표준을 준수하는 클래스 필드를 출력합니다. */
    // "moduleDetection": "auto",                        /* 모듈 형식의 JS 파일을 감지하는 방법을 제어합니다. */

    /* 모듈 설정 */
    "module": "commonjs" /* 생성될 모듈 코드를 지정합니다. */,
    // "rootDir": "./",                                  /* 소스 파일 내의 루트 폴더를 지정합니다. */
    // "moduleResolution": "node10",                     /* TypeScript가 지정된 모듈 식별자로부터 파일을 찾는 방법을 지정합니다. */
    // "baseUrl": "./",                                  /* 비상대적 모듈 이름을 해석하기 위한 기본 디렉토리를 지정합니다. */
    // "paths": {},                                      /* 추가 조회 위치로 가져오기를 다시 매핑하는 항목 집합을 지정합니다. */
    // "rootDirs": [],                                   /* 모듈을 해석할 때 여러 폴더를 하나로 취급할 수 있게 합니다. */
    // "typeRoots": [],                                  /* './node_modules/@types'처럼 작동하는 여러 폴더를 지정합니다. */
    // "types": [],                                      /* 소스 파일에서 참조되지 않고도 포함될 타입 패키지 이름을 지정합니다. */
    // "allowUmdGlobalAccess": true,                     /* 모듈에서 UMD 전역에 접근할 수 있게 합니다. */
    // "moduleSuffixes": [],                             /* 모듈을 해석할 때 검색할 파일 이름 접미사 목록입니다. */
    // "allowImportingTsExtensions": true,               /* TypeScript 파일 확장자로 가져오기를 허용합니다. '--moduleResolution bundler'와 '--noEmit' 또는 '--emitDeclarationOnly' 설정이 필요합니다. */
    // "rewriteRelativeImportExtensions": true,          /* 출력 파일에서 상대 가져오기 경로의 '.ts', '.tsx', '.mts', '.cts' 파일 확장자를 JavaScript 해당 확장자로 다시 작성합니다. */
    // "resolvePackageJsonExports": true,                /* 패키지 가져오기를 해석할 때 package.json의 'exports' 필드를 사용합니다. */
    // "resolvePackageJsonImports": true,                /* 가져오기를 해석할 때 package.json의 'imports' 필드를 사용합니다. */
    // "customConditions": [],                           /* 가져오기를 해석할 때 리졸버별 기본값 외에 설정할 조건입니다. */
    // "noUncheckedSideEffectImports": true,             /* 부작용이 있는 가져오기를 확인합니다. */
    // "resolveJsonModule": true,                        /* .json 파일 가져오기를 활성화합니다. */
    // "allowArbitraryExtensions": true,                 /* 선언 파일이 있는 경우 모든 확장자를 가진 파일의 가져오기를 활성화합니다. */
    // "noResolve": true,                                /* TypeScript가 프로젝트에 추가해야 하는 파일 수를 확장하는 'import', 'require' 또는 '<reference>'를 허용하지 않습니다. */

    /* JavaScript 지원 */
    // "allowJs": true,                                  /* JavaScript 파일을 프로그램의 일부로 허용합니다. 'checkJS' 옵션을 사용하여 이러한 파일에서 오류를 가져옵니다. */
    // "checkJs": true,                                  /* 타입 검사된 JavaScript 파일에서 오류 보고를 활성화합니다. */
    // "maxNodeModuleJsDepth": 1,                        /* 'node_modules'에서 JavaScript 파일을 검사하는데 사용되는 최대 폴더 깊이를 지정합니다. 'allowJs'와 함께 적용됩니다. */

    /* 출력 설정 */
    // "declaration": true,                              /* 프로젝트의 TypeScript 및 JavaScript 파일에서 .d.ts 파일을 생성합니다. */
    // "declarationMap": true,                           /* d.ts 파일에 대한 소스맵을 생성합니다. */
    // "emitDeclarationOnly": true,                      /* JavaScript 파일이 아닌 d.ts 파일만 출력합니다. */
    // "sourceMap": true,                                /* 출력된 JavaScript 파일에 대한 소스맵 파일을 생성합니다. */
    // "inlineSourceMap": true,                          /* 출력된 JavaScript 내에 소스맵 파일을 포함합니다. */
    // "noEmit": true,                                   /* 컴파일에서 파일 출력을 비활성화합니다. */
    // "outFile": "./",                                  /* 모든 출력을 하나의 JavaScript 파일로 번들링합니다. 'declaration'이 true인 경우 모든 .d.ts 출력도 번들링합니다. */
    // "outDir": "./",                                   /* 모든 출력 파일의 출력 폴더를 지정합니다. */
    // "removeComments": true,                           /* 주석 출력을 비활성화합니다. */
    // "importHelpers": true,                            /* 파일별로 포함하는 대신 tslib에서 헬퍼 함수를 프로젝트당 한 번만 가져올 수 있게 합니다. */
    // "downlevelIteration": true,                       /* 반복에 대해 더 호환되지만 자세하고 성능이 낮은 JavaScript를 출력합니다. */
    // "sourceRoot": "",                                 /* 디버거가 참조 소스 코드를 찾을 루트 경로를 지정합니다. */
    // "mapRoot": "",                                    /* 생성된 위치 대신 디버거가 맵 파일을 찾아야 하는 위치를 지정합니다. */
    // "inlineSources": true,                            /* 출력된 JavaScript 내의 소스맵에 소스 코드를 포함합니다. */
    // "emitBOM": true,                                  /* 출력 파일 시작 부분에 UTF-8 바이트 순서 표시(BOM)를 출력합니다. */
    // "newLine": "crlf",                                /* 파일 출력에 사용할 새 줄 문자를 설정합니다. */
    // "stripInternal": true,                            /* JSDoc 주석에 '@internal'이 있는 선언의 출력을 비활성화합니다. */
    // "noEmitHelpers": true,                            /* 컴파일된 출력에서 '__extends'와 같은 사용자 정의 헬퍼 함수 생성을 비활성화합니다. */
    // "noEmitOnError": true,                            /* 타입 검사 오류가 보고되면 파일 출력을 비활성화합니다. */
    // "preserveConstEnums": true,                       /* 생성된 코드에서 'const enum' 선언 삭제를 비활성화합니다. */
    // "declarationDir": "./",                           /* 생성된 선언 파일의 출력 디렉토리를 지정합니다. */

    /* 상호 운용성 제약 조건 */
    // "isolatedModules": true,                          /* 각 파일을 다른 가져오기에 의존하지 않고 안전하게 트랜스파일할 수 있도록 합니다. */
    // "verbatimModuleSyntax": true,                     /* 타입 전용으로 표시되지 않은 가져오기나 내보내기를 변환하거나 생략하지 않고 'module' 설정에 따라 출력 파일 형식으로 작성되도록 합니다. */
    // "isolatedDeclarations": true,                     /* 다른 도구가 선언 파일을 쉽게 생성할 수 있도록 내보내기에 충분한 주석을 요구합니다. */
    // "allowSyntheticDefaultImports": true,             /* 모듈에 기본 내보내기가 없을 때 'import x from y'를 허용합니다. */
    "esModuleInterop": true /* CommonJS 모듈을 가져오는 것을 쉽게 하기 위한 추가 JavaScript를 출력합니다. 타입 호환성을 위해 'allowSyntheticDefaultImports'를 활성화합니다. */,
    // "preserveSymlinks": true,                         /* 심링크를 실제 경로로 해석하는 것을 비활성화합니다. node의 동일한 플래그와 관련이 있습니다. */
    "forceConsistentCasingInFileNames": true /* 가져오기의 대소문자가 올바른지 확인합니다. */,

    /* 타입 검사 */
    "strict": true /* 모든 엄격한 타입 검사 옵션을 활성화합니다. */,
    // "noImplicitAny": true,                            /* 암시적 'any' 타입이 있는 표현식과 선언에 대한 오류 보고를 활성화합니다. */
    // "strictNullChecks": true,                         /* 타입 검사 시 'null'과 'undefined'를 고려합니다. */
    // "strictFunctionTypes": true,                      /* 함수를 할당할 때 매개변수와 반환 값이 하위 타입 호환되는지 확인합니다. */
    // "strictBindCallApply": true,                      /* 'bind', 'call', 'apply' 메서드의 인수가 원본 함수와 일치하는지 확인합니다. */
    // "strictPropertyInitialization": true,             /* 선언되었지만 생성자에서 설정되지 않은 클래스 속성을 확인합니다. */
    // "strictBuiltinIteratorReturn": true,              /* 내장 반복자는 'any' 대신 'undefined'의 'TReturn' 타입으로 인스턴스화됩니다. */
    // "noImplicitThis": true,                           /* 'this'가 'any' 타입을 가질 때 오류 보고를 활성화합니다. */
    // "useUnknownInCatchVariables": true,               /* catch 절 변수를 'any' 대신 'unknown'으로 기본 설정합니다. */
    // "alwaysStrict": true,                             /* 항상 'use strict'가 출력되도록 합니다. */
    // "noUnusedLocals": true,                           /* 읽히지 않은 지역 변수가 있을 때 오류 보고를 활성화합니다. */
    // "noUnusedParameters": true,                       /* 읽히지 않은 함수 매개변수가 있을 때 오류를 발생시킵니다. */
    // "exactOptionalPropertyTypes": true,               /* 선택적 속성 타입을 작성된 대로 해석하며, 'undefined'를 추가하지 않습니다. */
    // "noImplicitReturns": true,                        /* 함수에서 명시적으로 반환하지 않는 코드 경로에 대한 오류 보고를 활성화합니다. */
    // "noFallthroughCasesInSwitch": true,               /* switch 문에서 폴스루 케이스에 대한 오류 보고를 활성화합니다. */
    // "noUncheckedIndexedAccess": true,                 /* 인덱스를 사용하여 접근할 때 타입에 'undefined'를 추가합니다. */
    // "noImplicitOverride": true,                       /* 파생 클래스의 재정의 멤버가 override 수정자로 표시되어야 함을 보장합니다. */
    // "noPropertyAccessFromIndexSignature": true,       /* 인덱스 타입으로 선언된 키에 대해 인덱스 접근자 사용을 강제합니다. */
    // "allowUnusedLabels": true,                        /* 사용되지 않은 레이블에 대한 오류 보고를 비활성화합니다. */
    // "allowUnreachableCode": true,                     /* 도달할 수 없는 코드에 대한 오류 보고를 비활성화합니다. */

    /* 완전성 */
    // "skipDefaultLibCheck": true,                      /* TypeScript와 함께 포함된 .d.ts 파일의 타입 검사를 건너뜁니다. */
    "skipLibCheck": true /* 모든 .d.ts 파일의 타입 검사를 건너뜁니다. */
  }
}
```
