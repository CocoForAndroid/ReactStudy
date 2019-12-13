import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width : 960px
    margin: 56px auto
    overflow:hidden
`;
export const HomeLeft = styled.div`
    width : 625px
    margin-left:15px
    padding-top:30px
    float:left
    .banner-img {
        height:240px
        width:100%
        border-radius:10px
        }
`;

export const HomeRight = styled.div`
    width : 280px
    float:right    
`;

export const ListItem = styled.div`
    padding:20px 0px
    overflow:hidden
    border-bottom:1px solid #dcdcdc
    .item-img{
        width:150px
        display:block
        height:100px
        float:right
        border-radius:10px
    }
`;
export const ListInfo = styled.div`
    font-size:18px
    width:475px
    float:left
    .title{
        max-width: 450px;
        font-weight:700
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;        
    }
    .content{
        font-size:13px
        color:#999
        margin:15px 10px 8px 0px
        line-height:24px
    }
`;
export const RecommendWrapper = styled.div`
    margin:30px 0
    width:280px
`;
export const RecommendItem = styled.div`
    width:280px
    height:50px
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    margin-bottom:5px
`;
export const DownLoadWrapper = styled.div`
    padding:10px 22px
    margin-bottom:30px
    width:100%
    border:1px solid #f0f0f0
    align-item:center
    display:flex
    background:white
    .qr-code-style{
        width:60px
        height:60px    
    }
    .content{
        align-item:center
        display:flex
        margin:5px
        justify-content:center
        flex-flow:column
    }
`;
export const WriterWrapper = styled.div`
    display:flex
    flex-flow:column 
    width:100%
    .title{
        width:100%     
        display:flex
        flex-direction:row
        font-size:14px
        color:#969696
        justify-content:space-between
    }
    .list-wrapper{
        margin-top:10px
        display:flex
        flex-direction:column
    }
`;
export const WriterItem = styled.div`
    display:flex
    margin-top:15px
    flex-flow:row no-wrap
    position:relative
    .head-img{
        border-radius:50%
        height:48px
        width:48px
    }
    .follow{
        color:#42c02e
        font-size:13px
        right:0
        position:absolute
    }
    .user-info{
        display:flex
        flex-flow:column
        margin-left:10px
        .user-name{
            color:#333
            font-size:14px
            padding-top:5px
            margin-right:60px
        }
        .user-desc{
            color:#969696
            font-size:12px
            margin-top:10px
        }
    }  
`
