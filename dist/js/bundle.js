/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(11)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./merge.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./merge.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var ajax = __webpack_require__(14)
var path = __webpack_require__(9)
var music = (function() {
    function Music(target) {
        this.target = target
        this.init()
        this.bind()
    }
    Music.prototype.init = function() {

        //歌曲列表
        this.dataList = [
        {number: 1, channel: '热歌', title: '曹操', author: '林俊杰', picture:'imgs/Image-Linjunjie.jpg', url: 'audios/曹操.mp3', lrc: 'http://musicdata.baidu.com/data2/lrc/203c381ae532ec2adb9b558817aac762/535889870/535889870.lrc'},
        {number: 2, channel: '儿歌', title: '狼犬福克', author: '小蓓蕾组合', picture: 'imgs/Image-Xiaobeilei.jpg', url: 'audios/狼犬福克.mp3', lrc: 'http://musicdata.baidu.com/data2/lrc/1537be34a0bd16c3f84fc4329a9e9064/265853345/265853345.lrc'},
        {number: 3, channel: '轻松假日', title: '我在人民广场吃炸鸡', author: '阿肆', picture: 'imgs/Image-Asi.jpg', url: 'audios/我在人民广场吃炸鸡.mp3', lrc: path.join(__dirname, './audios/我在人民广场吃炸鸡.lrc')}
        ]
        
        
        this.body = $(document, 'body')
        this.container = $(this.target, '.container')
        this.container_ = $(this.target, '.container_')
        this.image_ = $(this.target, '.image_')
        this.keyframes = $(this.target, '.keyframes')
        this.keyframesOne = $(this.target, '.keyframes .one')
        this.keyframesTwo = $(this.target, '.keyframes .two')
        this.keyframesThree = $(this.target, '.keyframes .three')

        //全屏歌词
        this.lyric = $(this.target, '.lyric')
        this.taici_ = $(this.target, '.taici_')
        

        //播放按钮
        this.button = $(this.target, '.button')
        this.playDoubleButton = $(this.target, '.play-double')
        this.playButton = $(this.target, '.play')
        this.nextButton = $(this.target, '.next')

        //音量DOM
        this.timeVolumeLoopNode = $(this.target, '.time-volume-loop')
        this.volumeButton = $(this.target, '.volume')
        this.volumePanelNode = $(this.target, '.volume-panel')
        this.volumeLineNode = $(this.target, '.volume-line')
        this.volumeChangeNode = $(this.target, '.volume-change')
        this.volumeCircle = $(this.target, '.volume-circle')
        this.volumeIconNode = $(this.target, '.volume .iconfont')


        this.loopButton = $(this.target, '.loop')

        //播放界面上的img,style,author,title
        this.content = $(this.target, '.content')
        this.imgNode = $(this.target, '.picture')
        this.styleNode = $(this.target, '.style')
        this.authorNode = $(this.target, '.author')
        this.titleNode = $(this.target, '.title')

        //音乐进度条
        this.lineTimeContainer = $(this.target, '.line-time_container')
        this.timeNode = $(this.target, '.time')
        this.lineTimeNode = $(this.target, '.line-time')
        this.lineNode = $(this.target, '.line')
        this.lineNowNode = $(this.target, '.line-now')
        this.circleNode = $(this.target, '.circle')

        //界面上的歌词DOM
        this.lrcContent = $(this.target, '.lrc-content')
        this.lrcContent_ = $(this.target, '.lrc-content_')
        this.lrcLi = $$('.lrc-content li')
        this.taici = $(this.target, '.taici')

        //歌词==>[ [curTime, '歌词'], ...]
        this.lrcArr = []

        //音乐列表DOM
        this.preferButton = $(this.target, '.prefer')
        this.musicListContainer = $(this.target, '.music-list-container')
        this.musicList = $(this.target, '.music-list')
        this.musicListButton = $(this.target, '.list')
        this.musicLi = $$('.music-list li')
        this.musicLiDel = $$('.delete')
        this.point = $$('.point')
        this.musicListScrollUp = $(this.target, '.icon-yooxi')
        this.musicListScrollDown = $(this.target, '.icon-bottom1')

        //单个url load scroll的锁
        this.isUrl = false
        this.isLoad = false
        this.isLoad_ = false
        this.isScroll = false

        //创建歌曲的构造函数
        this.audio = new Audio()
        this.audio.autoplay = true

        function $(element, selector) {
            return element.querySelector(selector)
        }

        function $$(selector) {
            return document.querySelectorAll(selector)
        }
    }



    Music.prototype.bind = function() {
        var _this = this,
            g = -1  //播放列表里播放某一首歌的参数

        loadDataList()
        getAndLoad()

        this.showLrc = setInterval(showLrc, 500)

            //音乐API==>播放
        this.audio.addEventListener('playing', function() {
            this.timer = setInterval(function() {
                if ( _this.audio.duration && _this.audio.currentTime) {
                    updateProgress()
                }
            }, 1000)
            _this.image_.classList.add('animation1')
            _this.keyframesOne.classList.add('animation2')
            _this.keyframesTwo.classList.add('animation2')
            _this.keyframesThree.classList.add('animation2')
            _this.showLrc = setInterval(showLrc, 500)
        })

            //音乐API==>暂停
        this.audio.addEventListener('pause', function() {
            clearInterval(this.timer)
            clearInterval(_this.showLrc)
            clearInterval(_this.showLrc_)
            _this.image_.classList.remove('animation1')
            _this.keyframesOne.classList.remove('animation2')
            _this.keyframesTwo.classList.remove('animation2')
            _this.keyframesThree.classList.remove('animation2')
        })

            //音乐API==>一首歌结束            
        this.audio.addEventListener('ended', function() {

            //自动播放结束之后，从头开始播放
            let p = document.querySelectorAll('.point')
            if(g===p.length-1){
                g = -2
                loop()
            }

            //如果没有点击列表里的歌曲的话，在循环状态下，就让他按照顺序播放下去
            loop()

            if(_this.container_.classList.contains('overflow')){
                if(_this.lrcArr){
                    _this.showLrc_ = setInterval(showLrc_, 500)
                    clearInterval(_this.showLrc)
                }
            }else{
                if(_this.lrcArr){
                    _this.showLrc = setInterval(showLrc, 500)
                    clearInterval(_this.showLrc_)
                }
            }                       
        })

        document.querySelector('body').addEventListener('onkeydown', function(e){
            console.log(e.keyCode || e.which)
            if(e.keyCode === 32){
                var icon = this.querySelector('.iconfont')
                if (icon.classList.contains('icon-play')) {
                    _this.audio.play()
                } else {         
                    _this.audio.pause()
                }
                icon.classList.toggle('icon-pause')
                icon.classList.toggle('icon-play')
            }
            
        })

            //播放/暂停的切换
        this.playButton.addEventListener('click', function() {
            var icon = this.querySelector('.iconfont')
            if (icon.classList.contains('icon-play')) {
                _this.audio.play()
            } else {
                _this.audio.pause()
            }
            icon.classList.toggle('icon-pause')
            icon.classList.toggle('icon-play')
        })

            //切换音乐主题
            //==>在音乐列表里的歌曲时
            //==>点击下一主题
            //==>去除音乐列表里的歌曲播放
            //==>随机切换主题播放其中的某一首歌
        this.playDoubleButton.addEventListener('click', function() {

            getAndLoad()            
            iconLove1()

            let iconfontLoop = _this.loopButton.querySelector('.iconfont')
            iconfontLoop.classList.remove('icon-loop_allrepeat')
            iconfontLoop.classList.add('icon-loop_shuffle')

            let iconfontPlay = _this.playButton.querySelector('.iconfont')
            iconfontPlay.classList.remove('icon-play')
            iconfontPlay.classList.add('icon-pause')

            
        })


            //播放该音乐主题的下一首
        this.nextButton.addEventListener('click', function() {
            
            //自动播放结束之后，从头开始播放
            let p = document.querySelectorAll('.point')
            if(g===p.length-1){
                g = -2
                loop()
            }

            loop()

        //     //==>在音乐列表里的歌曲时
        //     //==>点击下一收
        //     //==>去除音乐列表里的歌曲播放
        })

            //点击图片，切换播放器界面
        this.image_.addEventListener('click', function(){
            //主播放界面切换
            _this.container_.classList.toggle('overflow')
            //全屏歌词界面切换
            _this.lyric.classList.toggle('hidden')
            _this.taici_.classList.toggle('hidden')
            if(_this.container_.classList.contains('overflow')){
                if(_this.lrcArr){
                    _this.showLrc_ = setInterval(showLrc_, 500)
                    clearInterval(_this.showLrc)
                }
            }else{
                if(_this.lrcArr){
                    _this.showLrc = setInterval(showLrc, 500)
                    clearInterval(_this.showLrc_)
                }
            }             
        })

            //歌词按钮，点击后出现全屏歌词
        this.taici.addEventListener('click', function(){

            _this.container_.classList.toggle('overflow')
            _this.lyric.classList.remove('hidden')
            _this.taici_.classList.remove('hidden')

            if(_this.lrcArr){
                _this.showLrc_ = setInterval(showLrc_, 500)
            }
            clearInterval(_this.showLrc)

        })

            //歌词按钮，点击后出现单行歌词
        this.taici_.addEventListener('click', function(){

            _this.container_.classList.toggle('overflow')
            _this.lyric.classList.add('hidden')
            this.classList.add('hidden')

            _this.showLrc = setInterval(showLrc, 500)
            if(_this.lrcArr){
                _this.showLrc = setInterval(showLrc, 500)
            }
            clearInterval(_this.showLrc_)

        })

            //==>随机播放该主题下某一首播放
            //播放方式==>随机播放/单曲循环/循环播放
            var i = 0,
                j
        this.loopButton.addEventListener('click', function(e) {
            
            let icons = ['icon-loop_single', 'icon-loop_allrepeat', 'icon-loop_shuffle']
            let iconfontLoop = this.querySelector('.iconfont')

             //有限循环的一般模式
            i = i % icons.length
            iconfontLoop.classList.add(icons[i])
            j = (i - 1 + icons.length) % icons.length
            iconfontLoop.classList.remove(icons[j])
            i++

        })


        /*音量控制*/

            //开始音量条默认为现在播放的音量
        this.volumeChangeNode.style.width = this.audio.volume * 100 + '%'

            //静音按钮==>点击静音/再次点击回复到音量条的音量大小
        this.volumeIconNode.addEventListener('click', function(e) {

            this.classList.toggle('icon-volume_high')
            this.classList.toggle('icon-volume_off')
            
            if(this.classList.contains('icon-volume_off')){
                _this.audio.volume = 0
            }
            if(this.classList.contains('icon-volume_high')){
                let w = _this.volumeChangeNode.style.width + ''
                let _w = parseFloat( w.slice(0, -1) ) / 100
                _this.audio.volume = _w
            }
        })

            //悬浮音量键出现音量条
        this.volumeButton.addEventListener('mouseover', function() {
            var iconfont = this.querySelector('.iconfont')
            if (iconfont.classList.contains('icon-volume_high')) {
                _this.volumePanelNode.style.display = 'block'
            }
        })
        this.volumeButton.addEventListener('mouseout', function() {
            _this.volumePanelNode.style.display = 'none'
        })

 
            //点击音量条上的位置改变音量大小
        this.volumePanelNode.addEventListener('click', function(e) {

            if(_this.volumeIconNode.classList.contains('icon-volume_off')){
               _this.volumeIconNode.classList.remove('icon-volume_off')
                _this.volumeIconNode.classList.add('icon-volume_high') 
            }

            var volumeLineWidth = parseInt(getComputedStyle(this).width)
            let percent  =  parseFloat(e.offsetX / volumeLineWidth) 
            let vol = _this.audio.volume = percent    
            _this.volumeChangeNode.style.width = percent * 100 + '%'
            _this.volume = vol
            

        })

            //阻止未希望的元素冒泡
        this.timeVolumeLoopNode.addEventListener('click', function(e){
            e.stopPropagation()
        })

        this.volumeCircle.addEventListener('click', function(e) {
            e.stopPropagation()
        })
        

        /*控制进度条*/

            //改变进度条的位置/时间/歌词
        this.lineTimeNode.addEventListener('click', function(e) {
            let lineWidth = parseInt(getComputedStyle(this).width)
            let percent = e.offsetX / lineWidth
            _this.audio.currentTime = parseInt(percent * _this.audio.duration)
            _this.lineNowNode.style.width = percent * 100 + '%'

            if ( _this.audio.duration && _this.audio.currentTime) {
                 updateProgress()
            }           
        })

        this.lineTimeNode.addEventListener('mouseover', function(){
            _this.circleNode.style.display = 'block'
        })
        this.lineTimeNode.addEventListener('mouseout', function(){
            _this.circleNode.style.display = 'none'
        })
       
        this.circleNode.addEventListener('click', function(e){
            e.stopPropagation()
        })

        /*音乐列表*/

        //=======把喜爱的歌曲添加到歌曲列表里,不喜欢的歌曲从歌曲列表里删除，点击列表里的歌曲播放该歌曲

        //==》声明一个空数组dataList = []，原始状态里面已经预存了3首歌曲的信息
        //==》这个数组用来实时记录当前播放列表里的歌曲信息
            
            
            //=======爱心按钮-添加当前歌曲
            //该按钮添加效果只能添加当前歌曲为音乐列表的最后一首歌曲

            
            //==》生成curMusic，number为歌曲列表的index+1
            //==》var curMusic = {number: 'number', channel: '伤感', picture: 'picture', title: '火柴天堂', author: '齐秦', url: 'url', lrc: 'lrc'}
            //==》拼接HTML，createHtml()
            //==》appendChild()从curMusic中把number，title，author,lrc,picture,url添加到播放列表里中
            //==》同时把当前歌曲curMusic添加到dataList里面


            //=======爱心按钮-删除该歌曲
            //该按钮的删除效果只能删除最后一首歌曲
            //==》removeChild(_this.musicList.querySelectorAll('li')[number])
            //==》同时从dataList里面去除curMusic

        this.preferButton.addEventListener('click', function() {
            
            var curMusic = {}
            var iconfont = this.querySelector('.iconfont')
            iconfont.classList.toggle('love')

            curMusic.number = _this.musicList.querySelectorAll('li').length + 1
            curMusic.channel = _this.styleNode.innerText
            curMusic.title = _this.titleNode.innerText
            curMusic.author = _this.authorNode.innerText.slice(2)
            curMusic.url = _this.audio.src
            curMusic.picture = _this.imgNode.getAttribute('src')
            curMusic.lrc = _this.lyc
            
            
            if (iconfont.classList.contains('love')) {  
                createHtmls(curMusic.number, curMusic.title, curMusic.author)
                _this.dataList.push(curMusic)
            }else{
                _this.musicList.removeChild(_this.li)
                _this.dataList.pop()
            }            
        })
        

        //=======点击歌曲列表里某一首歌曲播放

            //==》点击列表中的歌曲播放该歌曲，从该歌曲的number标签里获取到序号
            //==》idx = e.taget.querySelector('.number').innerText-2
            //==》匹配到dataList中的该歌曲信息，将其渲染到播放页面
            //==》dataList[idx].channel,dataList[idx].picture...
            //==》
            /*
            _this.audio.src = dataList[idx].url
            _this.audio.play()
            _this.imgNode.setAttribute('src', dataList[idx].picture)
            _this.imgNode.style.width = 112 + 'px'
            _this.imgNode.style.height = 112 + 'px'
            _this.titleNode.innerText = dataList[idx].title
            _this.authorNode.innerText = dataList[idx].artist

            getLrc(dataList[idx].lrc)
            */
            //==》播放到下一曲后，爱心按钮恢复到原始状态
            //
            //
        
        this.musicList.addEventListener('dblclick', function(e){

            //如果列表中某一首歌被点击的话，那么被点击的目标元素为'li'
            //移除其他项的active添加active，并且播放play(g)
       

            let index

            if(e.target.tagName.toLowerCase() === 'li' ){

                iconIcon()
                iconPlay()

                index = parseInt(e.target.querySelector('.number').innerText)-2

                
                g = index
                

                let p = document.querySelectorAll('.point')

                g = g % p.length

                oneLoop()
                g++

            }
        })
        this.musicList.addEventListener('click', function(e){

            //=====删除点击的垃圾桶对应的歌曲
            //这里特别注意鼠标点击的时候字体图标icon-delete的元素界面层级一直最高
            //就是鼠标一点击位置就是icon-delete的位置
            //这里设置z-index都没用!!!(TMD花了我好长时间才发现这个BUG)

            let index_

            if( e.target.classList.contains('icon-delete')){

                iconLove1()

                index_ = parseInt(e.target.parentNode.parentNode.querySelector('.number').innerText)-1
                
                this.querySelector('scroll-page').removeChild(e.target.parentNode.parentNode)

                
                    
                _this.dataList.splice(index_, 1)

                if(_this.dataList.length === 0){
                    loadAudio()
                    let iconfontLoop = _this.loopButton.querySelector('.iconfont')
                    iconfontLoop.classList.remove('icon-loop_allrepeat')
                    iconfontLoop.classList.add('icon-loop_shuffle')
                    i++
                }
                
                setTimeout(function(){
                    for(let i =0;i<_this.dataList.length;i++){
                        _this.dataList[i].number = i

                        _this.musicList.querySelectorAll('.number')[i].innerText = i + 1
                    }
                })
                

                if(e.target.parentNode.parentNode.querySelector('.point').classList.contains('active')){
                    
                    let p = document.querySelectorAll('.point')

                    g++
                    g = g%p.length
                    oneLoop()
                }   
            }
     
        })
            

            //音乐列表的打开按钮
        this.musicListButton.addEventListener('click', function(){
            _this.musicListContainer.classList.toggle('height')
            _this.musicListContainer.classList.toggle('box-shadow1')
            _this.container.classList.toggle('box-shadow')
            _this.musicList.querySelectorAll('li')[0].classList.toggle('border-top')
        })



        //=====icon的效果

            //将爱心变为黑心
        function iconLove1(){
            let iconfontLove = _this.preferButton.querySelector('.iconfont') 
            iconfontLove.classList.remove('love')
        }

            //将爱心变为红心
        function iconIcon(){
            let iconfontLove = _this.preferButton.querySelector('.iconfont') 
            iconfontLove.classList.add('love')
        }

            //如果有单曲循环标志，切换歌曲后还是单曲循环
        function singleLoop(){
            let iconfontSingle = _this.loopButton.querySelector('.iconfont')
            if (iconfontSingle.classList.contains('icon-loop_single')) {
                _this.audio.play()
            }
        }

            //切换播放按钮
        function iconPlay(){
            let iconfontPlay = _this.playButton.querySelector('.iconfont')
            iconfontPlay.classList.remove('icon-play')
            iconfontPlay.classList.add('icon-pause')
        }



        //=====核心循环函数
        //根据表示循环按钮的状态来切换歌曲的播放

        function loop(){
            let iconfont = _this.loopButton.querySelector('.iconfont')
            iconPlay()
            if (iconfont.classList.contains('icon-loop_shuffle')) {

                iconLove1()

                if(_this.isUrl) return
                _this.isUrl = true
                loadAudio()
                                
            }
            if (iconfont.classList.contains('icon-loop_single')) {
            
                _this.audio.play()
                
            }
            if (iconfont.classList.contains('icon-loop_allrepeat')) {

                iconIcon()
                              
                let p = document.querySelectorAll('.point')
                
                g = g % p.length
                g++

                oneLoop()
                              
            }
        }

            //循环播放下一首
        function oneLoop(){

            let p = document.querySelectorAll('.point')

            if(_this.isUrl) return
            _this.isUrl = true
            _this.s = setInterval(function(){
                if(_this.dataList[g]){
                                
                    play(g)

                    p.forEach(function(item){
                        item.classList.remove('active')
                    })
                    p[g].classList.add('active')
                                
                    clearInterval(_this.s)                             
                }

            },100) 

        }


        
        //=====切换歌曲时处理某一首歌曲(n)信息播放的函数

        function play(n){
            
            // //根据数组中该歌曲的信息，播放该歌曲
            _this.audio.src = _this.dataList[n].url 

            _this.audio.play()
            
            _this.styleNode.innerText = _this.dataList[n].channel
            _this.imgNode.setAttribute('src', _this.dataList[n].picture)
            _this.imgNode.style.width = 112 + 'px'
            _this.imgNode.style.height = 112 + 'px'
            _this.titleNode.innerText = _this.dataList[n].title
            _this.authorNode.innerText = '- ' + _this.dataList[n].author

            if(_this.dataList[n].lrc === ''){
                let lrc_ = '歌词君偷懒了，快来人K他╰（‵□′）╯'
                    _this.lrcContent.innerHTML = lrc_ 
                    _this.lrcContent.style.opacity = 1
            }else{
                getLrc(_this.dataList[n].lrc)
            }
            
            _this.isUrl = false

        }



        //=====处理歌曲数据


            //将dataList里的歌曲放到播放列表里
        function loadDataList(){
            for(let i = 0; i < _this.dataList.length; i++){
                createHtmls(_this.dataList[i].number, _this.dataList[i].title, _this.dataList[i].author)
            }          
        }

            //拼接歌曲的HTML
        function createHtmls(number, title, author) {   
            var _htmls = ''
                _htmls += '<div class="point"></div>'
                _htmls += '<div class="number">' + number + '</div>'
                _htmls += '<div class="front">' + title + '</div>'
                _htmls += '<div class="behind">' + author + '</div>'
                _htmls += '<div class="delete"><i class="iconfont icon-delete"></i></div>'
            let li = document.createElement('li')
            li.innerHTML = _htmls    
            _this.musicList.querySelector('scroll-page').appendChild(li)
            _this.li = li
        }

 

            //获取歌曲类别和歌曲
        function getAndLoad() {
            if (_this.isLoad_) return
            _this.isLoad_ = true
            ajax.init({
                url: 'https://bird.ioliu.cn/v1/?url=http://api.jirengu.com/fm/getChannels.php',
                dataType: 'json',
                type: 'get',
                success: function(ret) {
                    let i = Math.floor(Math.random() * (ret.channels.length))
                    let channel = ret.channels[i]
                    
                    _this.styleNode.innerText = channel.name
                    _this.styleNode.setAttribute('data-channel-id', channel.channel_id)

                    if(_this.isUrl) return
                    _this.isUrl = true
                    loadAudio()

                    _this.isLoad_ = false
                },
                error: function(error) {

                    let channel = '你不小心进入了奇怪的歌曲类别中'
                    _this.styleNode.innerText = channel
                   _this.isLoad_ = false
                    getAndLoad()
                    
                    
                }
            })
            
        }


        //获取歌曲的src，title，author, lrc
        function loadAudio() {
            if (_this.isLoad) return
            _this.isLoad = true
            var channelId = _this.styleNode.getAttribute('data-channel-id')
            ajax.init({
                url: 'https://bird.ioliu.cn/v1/?url=http://api.jirengu.com/fm/getSong.php',
                dataType: 'json',
                type: 'get',
                data: {
                    channel: channelId
                },
                success: function(ret) {

                    let title = ret.song[0].title || '木有这首歌哦'
                    let author = '- ' + (ret.song[0].artist || '无名艺术家')
                    let picture = ret.song[0].picture || 'imgs/Image-Wukong-001.png'   
                    let _url = ret.song[0].url
                    let lrc = ret.song[0].lrc
                    
                    _this.audio.src = _url
                    _this.audio.play()
                    _this.imgNode.setAttribute('src', picture)
                    _this.imgNode.style.width = 112 + 'px'
                    _this.imgNode.style.height = 112 + 'px'
                    _this.titleNode.innerText = title
                    _this.authorNode.innerText = author

                    if(!_url){
                        loadAudio()
                    }
                    if(lrc){
                        getLrc(lrc)
                    }else{
                        let lrc_ = '歌词君偷懒了，被你发现了哦╰（‵□′）╯'

                        _this.lrcContent.innerHTML = lrc_ 
                        _this.lrcContent.style.opacity = 1

                        _this.lrcContent_.innerHTML = lrc_ 
                        _this.lrcContent_.style.opacity = 1
                        clearInterval(_this.showLrc)
                        clearInterval(_this.showLrc_)
                    }

                    
                     _this.isUrl = false

                    _this.lyc = lrc
                    _this.isLoad = false
                },
                error: function(error) {
  
                    let title = '歌曲都听完啦，手动下一首吧'
                    let lrc = '<li>巴拉巴拉能量不足啦::>_<::</li>'                    

                    _this.titleNode.innerText = title
                    _this.lrcContent.innerHTML = lrc
                    _this.lrcContent.querySelector('li').style.opacity = 1
                    
                    _this.isLoad = false
                    loadAudio()
                    
                    
                }
            })
            
        }




        //=====计算出进度条长度和时间


        function updateProgress() {
            
            var percent = (_this.audio.currentTime / _this.audio.duration) * 100 + '%'
            _this.lineNowNode.style.width = percent
            var minutes = parseInt(_this.audio.currentTime / 60)
            var seconds = parseInt(_this.audio.currentTime % 60) + ''
            var minutesAll = parseInt(_this.audio.duration / 60)
            var secondsAll = parseInt(_this.audio.duration % 60) + ''
                //秒数变2位
            seconds = seconds.length == 2 ? seconds : '0' + seconds
            secondsAll = secondsAll.length == 2 ? secondsAll : '0' + secondsAll
            _this.timeNode.innerText = '- ' + minutes + ':' + seconds + ' / ' + minutesAll + ':' + secondsAll
        }



        //=====处理歌词



            //获取歌词
        function getLrc(lrcUrl) {           
            ajax.init({
                url: lrcUrl,
                type: 'get',
                dataType: 'text',
                success: function(ret) {
                    if (ret) {
                        var line = ret.split('\n')  //每行歌词数组['[00.01.23]咚锵咚锵齐不龙咚锵', ...]
                        var timeReg = /(\[\d{2}:\d{2}.\d{2}\])/g  //时间正则
                        var result = []
                        if(line != ''){
                            for (let i in line) {
                                let time = line[i].match(timeReg)  //时间数组['[00:01.23]', ...]
                                if(!time) continue;
                                var lrc = line[i].replace(timeReg, '')  //歌词'咚锵咚锵齐不龙咚锵'
                                for (let j in time ) {
                                    let t = time[j].slice(1, -1).split(':')  //把时间变成['00', '01.23']的格式，用于计算时间长度
                                    if(!lrc){
                                        lrc = 'Miaomiaomiao (ง •_•)ง  (❤ ω ❤)  ○( ＾皿＾)っ Hiahiahia…'
                                    }
                                    if(!t[0]) {
                                        curTime
                                    }
                                    let curTime = parseInt(t[0], 10) * 60 + parseFloat(t[1])  //计算时间长度
                                    result.push([curTime, lrc])
                                }                
                            }
                        }
                    }else{
                        var lrc = '<li>歌词君在呼呼大睡ing(～﹃～)~zZ</li>'
                        
                        _this.lrcContent.innerHTML = lrc 
                        _this.lrcContent.querySelector('li').style.opacity = 1

                        _this.lrcContent_.innerHTML = lrc 
                        _this.lrcContent_.querySelector('li').style.opacity = 1 
                    }

                    //根据时间长度对result数组进行升序排序

                    result.sort(function(a, b){
                        return a[0]-b[0]
                    })
                    
                    if(!result|| result === []){
                        var lrc = '<li>歌词君在呼呼大睡ing(～﹃～)~zZ</li>'
                    
                        _this.lrcContent.innerHTML = lrc 
                        _this.lrcContent.querySelector('li').style.opacity = 1

                        _this.lrcContent_.innerHTML = lrc 
                        _this.lrcContent_.querySelector('li').style.opacity = 1 
                    }else{
                        _this.lrcArr = result
                        renderLrc()
                    }                    
                },
                error: function(){
                    var lrc = "<li>歌词君正45°仰望星空ing(●'◡'●)</li>"
                    
                    _this.lrcContent.innerHTML = lrc 
                    _this.lrcContent.querySelector('li').style.opacity = 1
                    _this.lrcContent_.innerHTML = lrc 
                    _this.lrcContent_.querySelector('li').style.opacity = 1 
                }
            })
        }

            //将歌词放入lrcContent

        function renderLrc(){
            
                let lrcList = ''
                for(var i =0; i<_this.lrcArr.length; i++){
                    lrcList += '<li data-lrc="' + _this.lrcArr[i][0] + '">' + _this.lrcArr[i][1] + '</li>'
                }
                _this.lrcContent.innerHTML = lrcList
                _this.lrcContent_.innerHTML = lrcList
            
            
        }    

        
            //歌词的滚动效果=>带有渐变的位置滚动

        function showLrc(){

            if(!_this.lrcArr || _this.lrcArr.length === 1) return

            for(let j=0; j<_this.lrcArr.length; j++){   
                let k = j+1
                k++
                if(k === _this.lrcArr.length || _this.lrcArr.length === 1) {
                    return k = j
                }
                let curT = _this.lrcArr[j][0]
                let nextT = _this.lrcArr[k][0]
                if( (_this.audio.currentTime > curT) && ( curT < nextT) ){
                    _this.lrcContent.style.top = -16 * j + 'px'
                    _this.lrcContent.querySelectorAll('li').forEach(function(li){
                        li.style.fontSize = 12 + 'px'
                        li.style.opacity = .4 
                    })
                    if(_this.lrcContent.querySelectorAll('li')[j]){
                        _this.lrcContent.querySelectorAll('li')[j].style.fontSize = 13 + 'px'
                        _this.lrcContent.querySelectorAll('li')[j].style.opacity = 1
                    }
                    
                }
                   
            }        

        }   

            //全屏歌词的滚动
        function showLrc_(){

            if(!_this.lrcArr|| _this.lrcArr.length === 1) return

            for(let j=0; j<_this.lrcArr.length; j++){   
                let k = j+1
                k++
                if(k === _this.lrcArr.length || _this.lrcArr.length === 1) {
                    return k = j
                }
                let curT = _this.lrcArr[j][0]
                let nextT = _this.lrcArr[k][0]
                if( (_this.audio.currentTime > curT) && ( curT < nextT) ){                      

                    //全屏歌词
                    _this.lrcContent_.style.top = (-22 * j+44) + 'px'    
                    _this.lrcContent_.querySelectorAll('li').forEach(function(li){
                        li.style.fontSize = 12 + 'px'
                        li.style.color = '#404040'

                    })
                    if(_this.lrcContent_.querySelectorAll('li')[j]){
                        _this.lrcContent_.querySelectorAll('li')[j].style.fontSize = 14 + 'px'
                        _this.lrcContent_.querySelectorAll('li')[j].style.color = '#f06d6a'
                    }
                    
                }
                   
            }        

        } 

        //=====DOM选择     
            
        function $(selector) {
            this.target.querySelector(selector)
        }
    }
    return {
        init: function(target) {
            target.forEach(function(item) {
                new Music(item)
            })
        }
    }
})()
module.exports = music

/*

ssh  1026400757@47.91.156.35
密码：renwubanhuguozhu

*/
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0)

var music = __webpack_require__(1)
music.init(document.querySelectorAll('#music'))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(3)
var ieee754 = __webpack_require__(8)
var isArray = __webpack_require__(5)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "#music .image_,#music .image_ .picture{border-radius:50%}#music .button-container:after,#music .container:after,#music .music-list-container .music-list li:after,#music .time-volume-loop:after{content:\"\";clear:both}#music{position:relative;width:495px;margin:40px auto;cursor:default;color:#404040}#music .image_{position:absolute;z-index:20;width:112px;height:112px;cursor:pointer;box-shadow:0 0 10px 2px rgba(0,0,0,.2);transition:all .3s}.animation1{animation:30s infinite rotate linear}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}#music .keyframes{position:absolute;right:5px;top:2px;width:20px;height:16px;z-index:4;opacity:.5}#music .keyframes div{position:absolute;top:5px;width:2px;height:8px;background-color:#404040;border-radius:3px}#music .one{left:-4px}#music .two{animation-delay:.16s}#music .three{left:4px;animation-delay:.32s}.animation2{animation:.7s infinite height_ ease-in-out}@keyframes height_{0%,80%,to{height:8px;box-shadow:0 0 #404040}10%{height:10px;box-shadow:0 -4px #404040}}#music .container_{position:relative;overflow:hidden;height:226px;transition:height .5s}#music .container_.overflow{height:0}#music .container{position:relative;background-color:#fff;opacity:.9;box-shadow:0 2px 4px 0 rgba(0,0,0,.3);border:1px solid #eee;border-bottom:none;z-index:2}#music .content,#music .lyric{background:linear-gradient(0deg,hsla(0,0%,100%,0),#fafafa)}#music .container.box-shadow{box-shadow:none}#music .lyric,#music .music-list-container.box-shadow1{box-shadow:0 2px 4px 0 rgba(0,0,0,.3)}#music .container:after{display:block}#music .button,#music .content,#music .image,#music .line-time_container{float:left;margin-left:10px;transition:all .3s}#music .image{width:112px;height:112px;margin:0}#music .author,#music .title{margin:2px 0 0;text-align:center}#music .content{width:365px}#music .content .style{font-size:15px}#music .content>p{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#music .title{font-size:12px}#music .author{font-size:12px;opacity:.5}#music .lyric{position:absolute;top:0;left:122px;width:372px;height:112px;z-index:3}#music .lrc,#music .lrc_{position:relative;height:19px;padding:0 0 8px;font-size:12px;overflow:hidden}#music .lrc_{height:110px;padding:0}#music .lrc-content,#music .lrc-content_{position:absolute;top:0;width:365px;text-align:center;transition:all .3s}#music .lrc-content_{top:48px}#music .lrc .lrc-content li,#music .lrc_ .lrc-content_ li{white-space:pre;height:16px;opacity:.4}#music .lrc_ .lrc-content_ li{height:22px;opacity:.9}#music .taici_{position:absolute;right:3px;top:-2px;z-index:5;cursor:pointer;transition:all .3s;opacity:.6}.hidden{display:none}#music .taici_:hover{opacity:.9}#music .taici_ .iconfont{font-size:12px;font-weight:700;color:#f06d6a}#music .time-volume-loop{position:absolute;top:-1px;right:-114px;height:16px;font-size:12px;line-height:12px}#music .time-volume-loop>div{float:left}#music .time-volume-loop:after{display:block}#music div.volume{position:relative;top:-37px;height:45px;width:20px;opacity:.5;transition:all .3s}#music div.volume .iconfont{font-size:12px}#music div.vol{position:absolute;left:5px;bottom:-5px}#music div.volume:hover{opacity:1}#music .volume-panel{position:absolute;transform:rotate(-90deg);top:15px;left:-5px;width:30px;height:4px;padding:5px 0;cursor:pointer;display:none;transition:all .3s}#music .volume-panel .volume-line{width:30px;height:4px;background-color:#404040;opacity:.8}#music .volume-panel .volume-change{position:absolute;top:5px;left:0;height:4px;background-color:#f06d6a;opacity:.9;transition:all .3s}#music .volume-panel .volume-change .volume-circle{position:absolute;top:-3px;right:-4px;width:8px;height:8px;background-color:#fff;border:1px solid #f06d6a;border-radius:50%;transition:all .3s}#music div.loop{margin-top:1px;opacity:.5;transition:all .3s}#music div.loop .iconfont{font-size:15px}#music div.loop:hover{opacity:1}#music .line-time{position:relative;cursor:pointer;margin:4px 0;padding:5px 0}#music .line{width:250px;height:2px;background-color:#404040;opacity:.5;z-index:1000}#music .line-now,#music .line-now .circle{opacity:.9;position:absolute;transition:all .3s}#music .line-now{top:5px;left:0;height:2px;background-color:#f06d6a}#music .line-now .circle{top:-4px;right:-4px;width:8px;height:8px;background-color:#fff;border:1px solid #f06d6a;border-radius:50%;z-index:100;display:none}#music .line-time .time{opacity:.5;cursor:default}#music .button{width:365px;margin-top:-3px}#music .button-container:after{display:block}#music .button-container div.next,#music .button-container div.play,#music .button-container div.play-double{float:left;margin-right:10px;margin-top:-2px;cursor:pointer}#music .button-container div.play{margin-left:-4px}#music .next .iconfont,#music .play-double .iconfont,#music .play .iconfont{opacity:.5;transition:all .3s}#music .play .iconfont{font-size:18px;font-weight:700}#music .next .iconfont{font-size:13px;font-weight:700}#music .next .iconfont:hover,#music .play-double .iconfont:hover,#music .play .iconfont:hover{opacity:.9}#music .list .iconfont{font-weight:700;font-size:12px}#music .scroll-bottom .iconfont,#music .scroll-top .iconfont{font-size:15px;opacity:.5;transition:all .3s}#music .scroll-bottom .iconfont:hover,#music .scroll-top .iconfont:hover{opacity:.9}#music .prefer .icon-icon{font-size:22px;opacity:.5}#music .prefer .icon-icon.love{font-size:22px;color:#f06d6a;animation:.5s beBig ease-in-out;transition:all .3s}@keyframes beBig{0%{font-size:16px}to{font-size:22px}}#music .taici .iconfont{font-weight:700;font-size:14px}#music .button-container div.list,#music .button-container div.prefer,#music .button-container div.scroll,#music .button-container div.taici{float:right;cursor:pointer}#music .button-container div.list{margin-top:-3px;margin-right:3px;opacity:.5;transition:all .3s}#music .button-container div.prefer{position:absolute;margin-top:-2px;transform:translateX(200px)}#music .button-container div.taici{margin-right:99px;margin-top:-3px;opacity:.5;transition:all .3s}#music .button-container div.list:hover,#music .button-container div.taici:hover{opacity:.9}#music .music-list-container{position:relative;top:-1px;overflow:hidden;height:1px;transition:all .3s;border:1px solid #eee;border-top:none;border-bottom:none}#music .music-list-container scroll-container{display:block;height:110px;overflow-y:scroll;scroll-behavior:smooth}#music .music-list-container scroll-container scroll-page{display:block;height:100%}#music .music-list-container.height{height:110px}#music .music-list-container .music-list{width:495px;transition:top .5s}#music .music-list-container .music-list li{position:relative;font-size:12px;z-index:2;transition:all .3s;border-bottom:1px solid #eee}#music .music-list-container .music-list li:first-child.border-top{border-top:1px solid #eee}#music .music-list-container .music-list li:first-child{border-top:none}#music .music-list-container .music-list li:hover{background-color:#eee}#music .music-list-container .music-list li .point{position:absolute;width:478px;height:37px;background-color:#eee;display:none;transition:all .3s}#music .music-list-container .music-list li .point.active{transition:all .3s;display:block}#music .music-list-container .music-list li .active:before{position:absolute;top:7px;left:0;content:\"\";display:block;width:3px;height:23px;background-color:#f06d6a}#music .music-list-container .music-list li:after{display:block}#music .music-list-container .music-list li .number{position:absolute;left:10px;top:10px;opacity:.5;z-index:1;cursor:default}#music .music-list-container .music-list li .front{float:left;margin:10px 0 10px 30px;opacity:.9;z-index:1;cursor:default}#music .music-list-container .music-list li .behind{float:right;text-align:right;margin:10px 30px 10px 0;opacity:.5;z-index:1;cursor:default}#music .music-list-container .music-list li .delete{position:absolute;top:10px;right:8px;font-size:12px;opacity:.7;cursor:pointer;transition:all .3s}#music .music-list-container .music-list li .delete:hover{opacity:1}body,h1,h2,h3,h4,h5,h6,html,li,p,ul{list-style:none;margin:0;padding:0}a{text-decoration:none}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

 var ajax = (function(){
	function Ajax(options){
		options.success = options.success || function(){}
		options.error = options.error || function(){}
		options.dataType = options.dataType || 'json'
		options.data = options.data || {}

		var dataStr = ''
		for (var key in options.data){
			dataStr += key + '=' + options.data[key] + '&'
		}

		var xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200 || xhr.status === 304){
					if(options.dataType === 'json'){
						var json = JSON.parse(xhr.responseText)
						options.success(json)
					}
					if(options.dataType === 'text'){
						options.success(xhr.responseText)
					}
				}else{
					options.error()
				}
			}
		}

		dataStr = dataStr.substr(0, dataStr.length-1)

		if(options.type.toLowerCase() === 'post'){
			xhr.open(options.type, options.url, true)
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencode')
			xhr.send(dataStr)
		}
		if(options.type.toLowerCase() === 'get'){
			xhr.open(options.type, options.url + '?' + dataStr, true)
			xhr.send()
		}
	}
	return {
		init: function(options){
			new Ajax(options)
		}
	}	
})()
module.exports = ajax

/***/ })
/******/ ]);