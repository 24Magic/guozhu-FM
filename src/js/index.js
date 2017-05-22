var ajax = require('./ajax')
var path = require('path')
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
                    let lrc = 'https://bird.ioliu.cn/v1/?url=' + ret.song[0].lrc
                    console.log(lrc)
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