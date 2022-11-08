import _ from 'lodash'
//-------------------------------------------------
// |1:      |2:      |3:       |4:    
//-------------------------------------------------
// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
    name: 'Heropy',
    age: 85,
    emails: ['thesecon@gmail.com']
  }

  // ## 얕은 복사(Shallow copy)
  // ### 참조형복사
  // const copyUser = user
  // console.log(copyUser === user)
  // user.age = 22
  // console.log('user', user)
  // console.log('copyUser', copyUser)

  // ### 겉의 객체는 복사 했으나 또 다른 참조형 데이터는 복사 안됨 1
  // const copyUser = Object.assign({}, user)
  // console.log(copyUser === user)  
  // user.age = 22
  // console.log('user', user)
  // console.log('copyUser', copyUser)
  // console.log('--------------------')
  // user.emails.push('new@zillinks.com')
  // console.log(user.emails === copyUser.emails) 
  // console.log('user', user)
  // console.log('copyUser', copyUser)

  //### 겉의 객체는 복사 했으나 또 다른 참조형 데이터는 복사 안됨 2
  //user의 emails 와 copyUser의 emails 는 같은 메모리를 참조
  // const copyUser = {...user}
  // console.log(copyUser === user)  
  // user.age = 22
  // console.log('user', user)
  // console.log('copyUser', copyUser)
  // console.log('--------------------')
  // user.emails.push('new@zillinks.com')
  // console.log(user.emails === copyUser.emails) 
  // console.log('user', user)
  // console.log('copyUser', copyUser)

  //## 깊은 복사(Deep copy)
  const copyUser = _.cloneDeep(user)
  console.log(user.emails === copyUser.emails) 
  user.emails.push('new@zillinks.com')
  console.log('user', user)
  console.log('copyUser', copyUser)