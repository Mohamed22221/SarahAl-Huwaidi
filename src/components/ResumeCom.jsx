import React from 'react'
import styled from 'styled-components'
import {LayoutCulame, Layouts} from '../styles/Layouts'
import Title from '../components/Title'
import SmallTitle from './SmallTitle'
import ResumeItem from '../components/ResumeItem';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
const ResumeCom = () => {
    const briefcase = <WorkIcon />
    const school = <SchoolIcon />
  return (
    <MainReasumeCom>
   
      <Title title={'resume'} span={'resume Me'} />
      <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2002 - 2007'} 
                        title={'سكرتير '}
                        subTitle={'منطقة الأحمدي التعليمية'}
                        text={'وزارة التربية قسم التوجيه الفني للتربية البدنية بنين'} 
                    />
                    <ResumeItem 
                        year={'2007 - 2017'} 
                        title={'سكرتير أول'}
                        subTitle={'منطقة الأحمدي التعليمية'}
                        text={'وزارة التربية قسم التوجيه الفني للتربية البدنية بنين'}                     />
                    <ResumeItem 
                        year={'2017 - ومازلت عىل رأس العمل'} 
                        title={'معلم ديكور -'}
                        subTitle={'منطقة الأحمدي التعليمي'}
                        text={'وزارة التربية مدرسة ماما أنيسه المتوسطه بنات /'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - 2022'} 
                        title={'ماجستير عمارة داخلية'}
                        subTitle={'كلية الفنون الجميلة جامعة الاسكندريه'}
                    />
                    <ResumeItem 
                        year={'2016 - 2019'} 
                        title={'بكالوريوس تصميم داخلي '}
                        subTitle={'كلية التربية الأساسيه الكويت                        '}
                    />
                </div>
     
  </MainReasumeCom>
  )
}
const MainReasumeCom = styled.div`
       .small-title{
        padding-bottom: 3rem;
        margin-top:4rem ;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }

`
export default ResumeCom