(window.webpackJsonppassgame=window.webpackJsonppassgame||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),s=n(2),l=n.n(s),c=(n(14),n(3)),o=n(4),i=n(5),u=n(7),m=n(6),d=n(8),p=function(e){var a=e.answer,n=e.handleAnswerClick,t=e.handleEnterPress;return r.a.createElement("li",{className:"question-answer",tabIndex:"0",onClick:n,onKeyDown:t},a)},E=function(e){var a=e.question,n=e.answers,t=e.handleAnswerClick,s=e.handleEnterPress;return r.a.createElement("li",{className:"question"},r.a.createElement("h2",{className:"question-title",tabIndex:"0"},a),r.a.createElement("ul",{className:"question-answers",tabIndex:"-1"},n.map(function(e,a){return r.a.createElement(p,{key:JSON.stringify(e.props.children),answer:e,handleAnswerClick:t(a),handleEnterPress:s(a)})})))},h=function(e){var a=e.questions,n=e.handleAnswerClick,t=e.handleEnterPress;return r.a.createElement("ul",{className:"question-list"},a.map(function(e){return r.a.createElement(E,{key:e.question.props.children.toString(),question:e.question,answers:e.answers,handleAnswerClick:n,handleEnterPress:t})}))},w=function(e){var a=e.step,n=e.questions,t=e.totalQuestions,s=e.score,l=e.handleAnswerClick,c=e.handleEnterPress;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",null,r.a.createElement("div",{className:"question-count"},r.a.createElement("h2",null,"Pregunta"),r.a.createElement("div",{className:"question-number"},a),r.a.createElement("div",{className:"description"},"de ",r.a.createElement("span",null,t))),r.a.createElement("h1",null,"Security Trivia"),r.a.createElement("div",{className:"score-container"},r.a.createElement("h2",null,"Puntaje"),r.a.createElement("div",{className:"score"},s),r.a.createElement("div",{className:"description"},"puntos"))),r.a.createElement("div",{className:"questions"},r.a.createElement(h,{questions:n,handleAnswerClick:l,handleEnterPress:c})))},f=function(e){var a=e.modal,n=a.state,t=a.praise,s=a.points;return r.a.createElement("div",{className:"correct-modal"+("show"===n?" modal-enter":"")},r.a.createElement("div",{className:"praise"},t),r.a.createElement("div",{className:"points"},s))},v=function(e){return e.map(function(e){return e.tries}).reduce(function(e,a){return e[a]=(e[a]||0)+1,e},{})},g=function(e){var a=e.userAnswers,n=e.score,t=e.restartQuiz,s=v(a),l=s[1]&&r.a.createElement("div",null,r.a.createElement("strong",null,s[1])," en el primer intento."),c=s[2]&&r.a.createElement("div",null,r.a.createElement("strong",null,s[2])," en el segundo intento."),o=s[3]&&r.a.createElement("div",null,r.a.createElement("strong",null,s[3]),"en el tercer intento."),i=s[4]&&r.a.createElement("div",null,r.a.createElement("strong",null,s[4])," en el cuarto intento.");return r.a.createElement("div",{className:"results-container"},r.a.createElement("h2",null,"Resultados"),r.a.createElement("div",null,"Tu respondiste..."),l,c,o,i,r.a.createElement("div",{className:"results-total"},"Tu puntaje total es ",r.a.createElement("strong",null,n),"."),r.a.createElement("a",{onClick:t},"Volver a jugar"))},b=function(e){return e.sort(function(e,a){return Math.random()<.5?1:-1})},q=[{question:r.a.createElement("span",null,"\xbfUsas en tu contrase\xf1a palabras que aparecen en el diccionario?"),answers:[r.a.createElement("span",null,"S\xed, porque son f\xe1ciles de recordar."),r.a.createElement("span",null,"S\xed, pero en un idioma distinto al m\xedo."),r.a.createElement("span",null,"S\xed, pero escojo las palabras m\xe1s dif\xedciles."),r.a.createElement("span",null,"No.")],correct:3},{question:r.a.createElement("span",null,"\xbfPor qu\xe9 muchas personas escogen \u201cqwerty\u201d como clave de acceso?"),answers:[r.a.createElement("span",null,"Por ser una secuencia del teclado f\xe1cil de recordar."),r.a.createElement("span",null,"Por pensar que a nadie m\xe1s se le ocurrir\xeda una idea tan original."),r.a.createElement("span",null,"Todas las anteriores. "),r.a.createElement("span",null,"Por negligencia para crear una contrase\xf1a segura ")],correct:2},{question:r.a.createElement("span",null,"\xbfCu\xe1l de estas es una contrase\xf1a segura?"),answers:[r.a.createElement("span",null,"123456789."),r.a.createElement("span",null,"Contrase\xf1a."),r.a.createElement("span",null,"MgelFdLdFee2015."),r.a.createElement("span",null,"Facebook123.")],correct:2},{question:r.a.createElement("span",null,"\xbfCu\xe1l es el mejor lugar para guardar tus contrase\xf1as?"),answers:[r.a.createElement("span",null,"Una libreta de notas al lado del computador en la oficina."),r.a.createElement("span",null,"Un archivo de texto compartido solo con la familia."),r.a.createElement("span",null,"Apuntadas en papeles autoadhesivos cerca del tel\xe9fono"),r.a.createElement("span",null,"Ninguna de las anteriores.")],correct:3},{question:r.a.createElement("span",null,"\xbfQu\xe9 puedes hacer para proteger tus contrase\xf1as?"),answers:[r.a.createElement("span",null,"Enviarlas por correo electr\xf3nico."),r.a.createElement("span",null,"Acceder a tus cuentas desde hoteles, bibliotecas o cibercaf\xe9s."),r.a.createElement("span",null,"No mencionarlas en chats o redes sociales."),r.a.createElement("span",null,"Conservar las que vienen predeterminadas en las aplicaciones.")],correct:2},{question:r.a.createElement("span",null,"La mejor clave secreta:"),answers:[r.a.createElement("span",null,"Tiene secuencias con m\xe1s de 8 caracteres."),r.a.createElement("span",null,"Intercala s\xedmbolos entre las letras y los n\xfameros."),r.a.createElement("span",null,"No usa ni letras ni n\xfameros consecutivos."),r.a.createElement("span",null,"Todas las anteriores.")],correct:3},{question:r.a.createElement("span",null,"Adem\xe1s de crear unas dif\xedciles de adivinar \xbfqu\xe9 puedes hacer para proteger tus contrase\xf1as?"),answers:[r.a.createElement("span",null,"Evitar el acceso a tus cuentas desde redes de conexi\xf3n p\xfablicas."),r.a.createElement("span",null,"No descargar archivos de origen desconocido en tu computador."),r.a.createElement("span",null,"Cerrar siempre las sesiones (log out) de tus aplicaciones."),r.a.createElement("span",null,"Todas las anteriores.")],correct:3},{question:r.a.createElement("span",null,"\xbfQu\xe9 debe reunir una contrase\xf1a segura?"),answers:[r.a.createElement("span",null,"Fecha de nacimiento, nombres de mascotas, pel\xedcula de moda."),r.a.createElement("span",null,"N\xfamero del documento de identidad con n\xfameros de tel\xe9fono."),r.a.createElement("span",null,"Una combinaci\xf3n de may\xfasculas, min\xfasculas, n\xfameros y s\xedmbolos."),r.a.createElement("span",null,"Ninguna de las anteriores.")],correct:2}];function y(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function N(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?y(n,!0).forEach(function(a){Object(c.a)(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var k=function(e){function a(){var e,n;Object(o.a)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state=N({},n.getInitialState(n.props.totalQuestions)),n.handleAnswerClick=function(e){return function(a){var t=n.state,r=t.questions,s=t.step,l=t.userAnswers,c=r[0].correct===e,o=s-1,i=l[o].tries;c&&"LI"===a.target.nodeName?(a.target.parentNode.style.pointerEvents="none",a.target.classList.add("right"),l[o]={tries:i+1},n.setState({userAnswers:l}),setTimeout(function(){return n.showModal(i)},750),setTimeout(n.nextStep,2750)):"LI"===a.target.nodeName&&(a.target.style.pointerEvents="none",a.target.classList.add("wrong"),l[o]={tries:i+1},n.setState({userAnswers:l}))}},n.handleEnterPress=function(e){return function(a){13===a.keyCode&&n.handleAnswerClick(e)(a)}},n.showModal=function(e){var a,t;switch(e){case 0:a="primer intento!",t="+10";break;case 1:a="segundo intento!",t="+5";break;case 2:a="Correcto!",t="+2";break;default:a="Correcto!",t="+1"}n.setState({modal:{state:"show",praise:a,points:t}})},n.nextStep=function(){var e=n.state,a=e.questions,t=e.userAnswers,r=e.step,s=e.score,l=a.slice(1),c=t[r-1].tries;n.setState({step:r+1,score:n.updateScore(c,s),questions:l,modal:{state:"hide"}})},n.restartQuiz=function(){n.setState(N({},n.getInitialState(n.props.totalQuestions)))},n}return Object(d.a)(a,e),Object(i.a)(a,[{key:"getInitialState",value:function(e){e=Math.min(e,q.length);var a=b(q).slice(0,e);return{questions:a,totalQuestions:e,userAnswers:a.map(function(){return{tries:0}}),step:1,score:0,modal:{state:"hide",praise:"",points:""}}}},{key:"updateScore",value:function(e,a){switch(e){case 1:return a+10;case 2:return a+5;case 3:return a+2;default:return a+1}}},{key:"render",value:function(){var e=this.state,a=e.step,n=e.questions,s=e.userAnswers,l=e.totalQuestions,c=e.score,o=e.modal;return a>=l+1?r.a.createElement(g,{score:c,restartQuiz:this.restartQuiz,userAnswers:s}):r.a.createElement(t.Fragment,null,r.a.createElement(w,{step:a,questions:n,totalQuestions:l,score:c,handleAnswerClick:this.handleAnswerClick,handleEnterPress:this.handleEnterPress}),"show"===o.state&&r.a.createElement(f,{modal:o}))}}]),a}(t.Component);l.a.render(r.a.createElement(k,{totalQuestions:5}),document.getElementById("root"))},9:function(e,a,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.09a74f58.chunk.js.map