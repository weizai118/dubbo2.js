/**
 * https://github.com/dangdangdotcom/dubbox.git
 * run: com.alibaba.dubbo.demo.provider.DemoProvider
 */

// import {Dubbo, java, TDubboCallResult} from '../index';

// const dubbo = Dubbo.from({
//   application: {name: 'node-dubbox-consumer'},
//   dubboVersion: '2.8.4',
//   isSupportedDubbox: true,
//   register: 'localhost:2181',
//   interfaces: [
//     'com.alibaba.dubbo.demo.hello.HelloService',
//     'com.alibaba.dubbo.demo.bid.BidService',
//   ],
// });

// describe('add dubbox test suite', () => {
//   it('helloService', async () => {
//     const helloService = dubbo.proxyService({
//       dubboInterface: 'com.alibaba.dubbo.demo.hello.HelloService',
//       version: '',
//       group: '',
//       methods: {
//         hello(name) {
//           return [java.String(name)];
//         },
//       },
//     }) as {hello(name: string): TDubboCallResult<string>};
//     const {res, err} = await helloService.hello('node');
//     console.log(res);
//     expect(err).toBeNull();
//     expect(res != null).toEqual(true);
//   });

//   it('bidService', async () => {
//     const bidService = dubbo.proxyService({
//       dubboInterface: 'com.alibaba.dubbo.demo.bid.BidService',
//       version: '',
//       group: '',
//       methods: {
//         bid(bidRequest) {
//           return [bidRequest];
//         },
//       },
//     }) as {bid(bidRequest: object): TDubboCallResult<Object>};

//     const {res, err} = await bidService.bid(
//       java.combine('com.alibaba.dubbo.demo.bid.BidRequest', {
//         id: java.String('1'),
//         device: java.combine('com.alibaba.dubbo.demo.bid.Device', {
//           os: 'macOS Hign Sierra',
//           make: 'mid 2015',
//           version: '10.13.4',
//           model: 'top',
//           geo: java.combine('com.alibaba.dubbo.demo.bid.Geo', {
//             lon: java.float(11.0),
//             lat: java.float(12.0),
//             country: java.String('US'),
//             city: java.String('Sanf..'),
//           }),
//           impressions: java.List([
//             java.combine('com.alibaba.dubbo.demo.bid.Impression', {
//               id: java.String('123'),
//               bidFloor: java.double(3),
//             }),
//           ]),
//         }),
//       }),
//     );

//     expect(err).toBeNull();
//     expect(res != null).toEqual(true);
//   });
// });

it('', () => {});
