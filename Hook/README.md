## npm hook 항목 

- [useTitle(html 타이틀 변경 Route와 별개임)
    const useTitle = (initialTitle) => {
      const [title, setTitle] = useState(initialTitle);
      const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
      };
      //페이지이름이 Loading...으로 시작됨
      useEffect(updateTitle, [title]); 
      return setTitle;
    };

    const App = () => {
      const titleUpdater = useTitle("Loading...");
      //5초뒤 title값을 Home로 변경 
      setTimeout(() => titleUpdater("Home"), 5000);
      return (
        <div className="App">
          <div>Hi</div>
        </div>
      );
    };
  ] 
- [ useInput(입력량&특수문자 제한)
    import React, {useState} from 'react'
    const useInput = (intivalValue, validator) => {
        const [value, setValue] = useState(intivalValue);
        const onChange = (e) => {
        const {
              target: { value }
        } = e;
        let willUpdate = true;
        //검증 및 실행 
        if (typeof validator === "function") {
              willUpdate = validator(value);
        }
        if (willUpdate) {
              setValue(value);
        }
    };
  return { value, onChange };
  //입력란에 @가 아니며 10문자 이하로 입력 가능
  const maxLen = (value) => !value.includes("@") && value.length <= 10;
  //입력란이 Mr.로 시작하며 그뒤부터 입력됨
  const name = useInput("Mr.", maxLen);
  return(){
    <input placeholder="Name" {...name} />
  }
};
 ]
- [useClick(클릭이벤트 설정)
    import React, { useState, useEffect, useRef } from "react";

    Click설정
    const useClick = (onClick) => {
      //검증
      if (typeof onClick !== "function") {
        return; 
      }
      const element = useRef();
      useEffect(() => {
        if (element.current) {
          //Click이벤트 부여
          element.current.addEventListener("click", onClick);
        }
        return () => {
          if (element.current) {
            //Click이벤트 제거
            element.current.removeEventListener("click", onClick);
          }
        };
      }, []);
      return element;
  };

  const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
      <div className="App">
        <h1 ref={title}>Hi</h1>
      </div>
    );
  };
]
- [useFadeln(서서히 보이는 효과 out설정도 가능)
  import React, { useEffect, useRef }
  //duration & delay 기본값을 각각 1, 0 으로 설정 했다
  const useFadeIn = (duration = 1, delay = 0) => {
    //검증
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    }, []);
    return { ref: element, style: { opacity: 0 } };
    //<tag ref={element} style={ {opacity:0}, }></tag> 태그형태일경우
  };

  const App = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInp = useFadeIn(5, 10);
    return (
      <div className="App">
        <h1 {...fadeInH1}>Hello</h1>
        <p {...fadeInp}>lorem ipsum lalalalala</p>
      </div>
    );
};
  ] 
- [useFullscreen(선택영역을 사용자화면 전체크기로 변경 후 돌아오기)
    const useFullScreen = (callback) => {
      const element = useRef();

      const triggerFull = () => {
        if (element.current) {
          element.current.requestFullscreen();
          if (callback && typeof callback === "function") {
            callback(true);
          }
        }
    };
      const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function") {
          callback(false);
        }
      };
      return { element, triggerFull, exitFull };
  };

  const App = () => {
      const onFullS = (isFull) => {
        console.log(isFull ? "전체화면" : "본화면");
      };
      const { element, triggerFull, exitFull } = useFullScreen(onFullS);
      return (
        <div className="App" style={{ height: "1000vh" }}>
          <div ref={element}>
            <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="40%" />
            <button onClick={exitFull}>되돌리기</button>
          </div>
          <button onClick={triggerFull}>풀스크린 변경</button>
        </div>
      );
    };
  ] 
- [ ] useHover
- [useNetwork(인터넷 연결상태를 확인하고 online, offline 각각 function설정) 
      import React, { useState, useEffect } from 'react';
      const useNetwork = (onChange) => {
      const [status, setStatus] = useState(navigator.onLine);

      const handleChange = () => {
        //입력 받은 개체가 function이면 
        if (typeof onChange === "function") {
          onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
      };

      useEffect(() => {
        //넷 연결상태 이벤트 설정
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        () => {
          window.removeEventListener("online", handleChange);
          window.removeEventListener("offline", handleChange);
        };
      }, []);

      return status;
    };

    const App = () => {
      const handleNetworkChange = (online) => {
        alert(online ? "we juse went online" : "we are offline");
      };
      const onLine = useNetwork(handleNetworkChange);
      return (
        <div className="App">
          <h1>{onLine ? "online" : "offline"}</h1>
        </div>
      );
    };
  ] 
- [useNotification(Hook이 아니며 사용자의 window에 알림창을 띄웁니다 title, info, function등 설정 가능))
    import React from 'react';
    //알림창의 제목 및 설명란 설정
    const useNotification = (title, option) => {
      //검증
      if (!("Notification" in window)) {
        return;
      }
      const fireNotif = () => {
        //사용자가 알림을 막았는지 확인
        if (Notification.permission !== "granted") {
          //막았을 경우 허용, 차단 창을 띄움  
          Notification.requestPermission().then((permission) => {
            //사용자가 허용했을경우 알림을 띄움
            if (permission === "granted") {
              new Notification(title, option);
            } else {
              //차단시 이벤트 취소
              return;
            }
          });
        } else {
          new Notification(title, option);
        }
      };
      return fireNotif;
    };

    const App = () => {
      const triggerNotif = useNotification("알림창입니다", {
        body: "알림창이 성공적으로 실행됐습니다"
      });

      return (
        <div className="App" style={{ height: "1000vh" }}>
          <button onClick={triggerNotif}>Hello</button>
        </div>
      );
    };
  ] 
- [useScroll(스크롤 좌표값 얻기)
    import React, { useState, useEfect} from 'react;
    const useScroll = () => {
      const [state, setState] = useState({
        x: 0,
        y: 0
      });
      const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
      };
      useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      });
      return state;
    };
    const App = () => {
      const { y } = useScroll();

      return (
        <div className="App" style={{ height: "1000vh" }}>
          <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
            online
          </h1>
        </div>
      );
    };
  ] 
- [ useTabs(배열 정보 가져와 사용)
    import React, {useState} from 'react'
    
    //배열설정(이벤트의 종류나 정보등을 저장함)
    const content = [ 
      {
        tab: "Section 1",
        content: "I'm the content of the Section 1 "
      },
      {
        tab: "Section 2",
        content: "I'm the content of the Section 2 "
      }
    ];

    //에러확인 allTabs가 아니거나 allTabs가 Array속성이 아닌경우 return;된다
    const useTabs = (initialTab, allTabs) => {
      
      if (!allTabs || !Array.isArray(allTabs)) {
        return;
      }

      //인덱스 설정 useState를 사용하여 initialTab의 현재 값으로 return
      const [currentIndex, setCurrentIndex] = useState(initialTab);
      return {
        currentItem: allTabs[currentIndex], //초기값을 설정하는 Array type
        changeItem: setCurrentIndex         //클릭 후 발생하는 function type 함수실행이 아니면 오류가난다
      };
    };

    const App = () => {
      const { currentItem, changeItem } = useTabs(0, content);
      return (
        <div className="App">
            //map객체 활용해서 버튼에 onClick(section,index)상태로 출력 버튼엔 순서대로 0, 1, 2, 3... 값이 부여됨
          {content.map((section, index) => (
            <button onClick={() => changeItem(index)}>{section.tab}</button>
          ))}
          <div>{currentItem.content}</div>
        </div>
      );
    };

  ] 
- [usePreventLeave(페이지 이동시도할때 알림창)
    const usePreventLeave = () => {
      //PreventDefault 및 returnValue를 설정해줘야 제대로 작동한다
      const listener = (event) => {
        event.preventDefault();
        event.returnValue = ""; 
      };

      const enablePrevent = () => window.addEventListener("beforeunload", listener);
      const disablePrevent = () => window.removeEventListener("beforeunload", listener);
      return { enablePrevent, disablePrevent };
    };

    const App = () => {
      //usePreventLeave return값으로 설정해서 실행 
      const { enablePrevent, disablePrevent } = usePreventLeave();
      return (
        <div className="App">
          <button onClick={enablePrevent}>project</button>
          <button onClick={disablePrevent}>unprotect</button>
        </div>
      );
    };
  ]
- [useConfirm(확인창 true 또는 false 일때 함수 실행)
    import React from 'react'
    
    //useConfirm 훅 설정 ('confirm내용', 'true함수 실행', 'false함수 실행')
    const useConfirm = (message = "", onConfirm, onCancel) => {
      
      //검증
      if (!onConfirm || typeof onConfirm !== "function") {
        return;
      }
      if (!onCancel || typeof onCancel !== "function") {
        return;
      }
      
      //confirm 내용 설계
      const confirmAction = () => {
        //검증
        if (confirm(message)) {
          onConfirm();
        } else {
          onCancel();
        }
      };
      
      //return 형태에서 바로 함수식을 사용할수는 없다 호출기능 사용
      return confirmAction;
    };
    const App = () => {
      const deleteWorld = () => console.log("Deleting the world");
      const abort = () => console.log("Aborted");
      
      //confirm값이 true 일경우 deleteWorld 함수 실행 Deleting the world 문장이 콘솔에 나온다
      const confirmDelete = useConfirm("Are yoe sure", deleteWorld, abort);
      
      return (
        <div className="App">
          <button onClick={confirmDelete}>Delete the world</button>
        </div>
      );
    };

  ] 
- [useAxios(api 데이터 가져오기) 
  
    @useAxios.js
    import defaultAxios from "axios";
    import { useState, useEffect } from "react";
  
    const useAxios = (opts, axiosInstance = defaultAxios) => {
      const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
      });
      const [trigger, setTrigger] = useState(0);
      if (!opts.url) {
        return;
      }
      const refetch = () => {
        setState({
          ...setState,
          loading: true
        });
        setTrigger(Date.now());
      };
      useEffect(() => {
        axiosInstance(opts)
          .then((data) => {
            setState({
              ...state,
              loading: false,
              data
            });
          })
          .catch((error) => {
            setState({ ...state, loading: false, error });
          });
      }, [trigger]);
      return { ...state, refetch };
    };
    export default useAxios;
  
    @index.js
    import React, { useState, useEffect } from "react";
    import ReactDOM from "react-dom";
    import useAxios from "./useAxios";
    
    const App = () => {
      const { loading, data, error, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json"
      });
      console.log(`Loading:${loading}\n${error}\nData:${JSON.stringify(data)} `);
      return (
        <div className="App" style={{ height: "1000vh" }}>
          <h1>{data && data.status}</h1>
          <h2>{loading && "Loading..."}</h2>
          <button onClick={refetch}>리페치</button>
        </div>
      );
    };
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
  ] 
- [useState(함수 실행 변동값을 보여줄때 사용)  
  import Reac, {useState} from 'react';
    const [item, setItem] = useState(1);
    const increnentItem = () => setItem(item - 1);
    const decrementItem = () => setItem(item + 1);

    return(
        <button onClick={increnentItem}>Increment</button>
        <button onClick={decrementItem}>decrementItem</button>
    )
   ]
- [uesEffect(componentDidMount, componentDidUpdate, componentWillUnmount)
    import React, { useState, useEffect } from "react";

    const App = () => {
      const sayHello = () => console.log("Hello");
      const [number, setNumber] = useState(0);
      const [aNumber, setAnumber] = useState(0);
      // useEffect는 componentDidMount, ComponentDidUpdate와 같음 실행시 이벤트 발생
      // 실행할함수선택,실행에조건추가 sayHello함수의 [number]만 실행된다
      // useEffect의 기본형태   function,'[]'(dependency)
      useEffect(sayHello, [number]);
      return (
        <div className="App">
          <div>Hi</div>
          <button onClick={() => setNumber(number + 1)}>{number}</button>
          <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
      );
    };

  ]
- [useRef(선택자, 연결도우미)
    import React, { useRef } from 'react'
    //useRef는 선택자 역할을 한다 5초뒤 input에 focus됨
    const App = () => {
        const potato = useRef();
        setTimeout(() => potato.current.focus(), 5000);
        return (
          <div className="App">
            <div>Hi</div>
            <input ref={potato} placeholder="la" />
          </div>
        );
    };
  ]
- [useBeforeLeave(마우스 이벤트 설정)
    import React, { useEffect } from 'react';
    const useBeforeLeave = (onBefore) => {
      if (typeof onBefore !== "function") {
        return;
      }
      const handle = (event) => {
        /상단으로 leave될때만 이벤트가 발생됨 colsole.log(event)참고 
        let { clientY } = event;
        if (clientY <= 0) {
          onBefore();
        }
      };
      useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
      }, []);
    };

    const App = () => {
      const begForLife = () => console.log("Pls dont leave");
      useBeforeLeave(begForLife);

      return (
        <div className="App">
          <h1>Hello</h1>
        </div>
      );
    };
  ]