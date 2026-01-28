import { Verse } from './types';

const rawVerses = `Romans 1:16-17
I am not ashamed of the gospel, because it is the power of God for the salvation of everyone who believes: first for the Jew, then for the Gentile. For in the gospel a righteousness from God is revealed, a righteousness that is by faith from first to last, just as it is written: "The righteous will live by faith."
Romans 3:23-24
For all have sinned and fall short of the glory of God and are justified freely by his grace through the redemption that came by Christ Jesus.
Romans 5:1-2
Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ, through whom we have gained access by faith into this grace in which we now stand. And we rejoice in the hope of the glory of God.
Romans 5:8
But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.
Romans 6:4
We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.
Romans 6:23
For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.
Romans 8:1-2
Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit of life set me free from the law of sin and death.
Romans 8:9-11
You, however, are controlled not by the sinful nature but by the Spirit, if the Spirit of God lives in you. And if anyone does not have the Spirit of Christ, he does not belong to Christ. But if Christ is in you, your body is dead because of sin, yet your spirit is alive because of righteousness. And if the Spirit of him who raised Jesus from the dead is living in you, he who raised Christ from the dead will also give life to your mortal bodies through his Spirit, who lives in you.
Romans 8:18
I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.
Romans 8:28
And we know that in all things God works for the good of those who love him, who have been called according to his purpose.
Romans 8:31
What, then, shall we say in response to this? If God is for us, who can be against us?
Romans 8:38-39
For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.
Romans 9:16
It does not, therefore, depend on man's desire or effort, but on God's mercy.
Romans 10:9-10
If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.
Romans 10:13
Everyone who calls on the name of the Lord will be saved.
Romans 10:17
Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.
Romans 11:33
Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgements, and his paths beyond tracing out!
Romans 12:1
Therefore, I urge you, brothers, in view of God's mercy, to offer your bodies as living sacrifices, holy and pleasing to God – this is your spiritual act of worship.
Romans 12:2
Do not conform any longer to the pattern of this world but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is – his good, pleasing and perfect will.
Romans 12:9-10
Love must be sincere. Hate what is evil; cling to what is good. Be devoted to one another in brotherly love. Honor one another above yourselves.
Romans 12:18
If it is possible, as far as it depends on you, live at peace with everyone.
Romans 13:8
Let no debt remain outstanding, except the continuing debt to love one another, for he who loves his fellowman has fulfilled the law.
Romans 14:17
For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace, and joy in the Holy Spirit.
Romans 15:13
May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.
Ephesians 1:11
In him we were also chosen, having been predestined according to the plan of him who works out everything in conformity with the purpose of his will.
Ephesians 1:13-14
And you also were included in Christ when you heard the word of truth, the gospel of your salvation. Having believed, you were marked in him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance until the redemption of those who are God's possession – to the praise of his glory.
Ephesians 2:4-5
But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions – it is by grace you have been saved.
Ephesians 2:8-9
For it is by grace you have been saved, through faith – and this is not from yourselves, it is the gift of God – not by works, so that no one can boast.
Ephesians 2:10
For we are God's workmanship, created in Christ Jesus to do good works, which God prepared in advance for us to do.
Galatians 2:20
I have been crucified with Christ, and I no longer live, but Christ lives in me. The life I live in the body, I live by faith in the Son of God, who loved me and gave himself for me.
Colossians 1:28
We proclaim him, admonishing and teaching everyone with wisdom, so that we may present everyone perfect in Christ.
Matthew 11:28-30
"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."
Mark 8:34-36
"Whoever wants to be my disciple must deny themselves and take up their cross and follow me. For whoever wants to save their life will lose it, but whoever loses their life for me and for the gospel will save it. What good is it for someone to gain the whole world, yet forfeit their soul?
Mark 8:38
If anyone is ashamed of me and my words in this adulterous and sinful generation, the Son of Man will be ashamed of them when he comes in his Father's glory with the holy angels."
Luke 9:23-26
Then he said to them all: "Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me. For whoever wants to save their life will lose it, but whoever loses their life for me will save it. What good is it for someone to gain the whole world, and yet lose or forfeit their very self? Whoever is ashamed of me and my words, the Son of Man will be ashamed of them when he comes in his glory and in the glory of the Father and of the holy angels.
Luke 14:26-27
"If anyone comes to me and does not hate father and mother, wife and children, brothers and sisters—yes, even their own life—such a person cannot be my disciple. And whoever does not carry their cross and follow me cannot be my disciple.
Philippians 3:7-9
But whatever were gains to me I now consider loss for the sake of Christ. What is more, I consider everything a loss because of the surpassing worth of knowing Christ Jesus my Lord, for whose sake I have lost all things. I consider them garbage, that I may gain Christ and be found in him, not having a righteousness of my own that comes from the law, but that which is through faith in Christ—the righteousness that comes from God on the basis of faith.
Philippians 3:10-14
I want to know Christ—yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death, and so, somehow, attaining to the resurrection from the dead. Brothers and sisters, I do not consider myself yet to have taken hold of it. But one thing I do: Forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.
John 8:31-32
To the Jews who had believed him, Jesus said, "If you hold to my teaching, you are really my disciples. Then you will know the truth, and the truth will set you free."
John 8:34-36
Jesus replied, "Very truly I tell you, everyone who sins is a slave to sin. Now a slave has no permanent place in the family, but a son belongs to it forever. So if the Son sets you free, you will be free indeed.
Mark 3:14-15
He appointed twelve that they might be with him and that he might send them out to preach and to have authority to drive out demons.
Romans 12:1-2
Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship. Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is—his good, pleasing and perfect will.
2 Corinthians 3:16-18
But whenever anyone turns to the Lord, the veil is taken away. Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom. And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.
Colossians 1:28-29
He is the one we proclaim, admonishing and teaching everyone with all wisdom, so that we may present everyone fully mature in Christ. To this end I strenuously contend with all the energy Christ so powerfully works in me.
Matthew 7:24-25
"Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock.
John 14:15-17
"If you love me, keep my commands. And I will ask the Father, and he will give you another advocate to help you and be with you forever— the Spirit of truth. The world cannot accept him, because it neither sees him nor knows him. But you know him, for he lives with you and will be in you.
John 14:18-21
I will not leave you as orphans; I will come to you. Before long, the world will not see me anymore, but you will see me. Because I live, you also will live. On that day you will realize that I am in my Father, and you are in me, and I am in you. Whoever has my commands and keeps them is the one who loves me. The one who loves me will be loved by my Father, and I too will love them and show myself to them."
John 14:23-24
"Anyone who loves me will obey my teaching. My Father will love them, and we will come to them and make our home with them. Anyone who does not love me will not obey my teaching. These words you hear are not my own; they belong to the Father who sent me.
John 14:25-27
"All this I have spoken while still with you. But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you. Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.
James 1:22-25
Do not merely listen to the word, and so deceive yourselves. Do what it says. Anyone who listens to the word but does not do what it says is like someone who looks at his face in a mirror and, after looking at himself, goes away and immediately forgets what he looks like. But whoever looks intently into the perfect law that gives freedom, and continues in it—not forgetting what they have heard, but doing it—they will be blessed in what they do.
Luke 11:28
"Blessed rather are those who hear the word of God and obey it."
Matthew 18:20
For where two or three gather in my name, there am I with them."
Acts 2:42
They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.
Hebrews 10:24-25
And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.
Romans 8:1-4
Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death. For what the law was powerless to do because it was weakened by the flesh, God did by sending his own Son in the likeness of sinful flesh to be a sin offering. And so he condemned sin in the flesh, in order that the righteous requirement of the law might be fully met in us, who do not live according to the flesh but according to the Spirit.
Romans 8:5-8
Those who live according to the flesh have their minds set on what the flesh desires; but those who live in accordance with the Spirit have their minds set on what the Spirit desires. The mind governed by the flesh is death, but the mind governed by the Spirit is life and peace. The mind governed by the flesh is hostile to God; it does not submit to God's law, nor can it do so. Those who are in the realm of the flesh cannot please God.
Romans 8:9-11v2
You, however, are not in the realm of the flesh but are in the realm of the Spirit, if indeed the Spirit of God lives in you. And if anyone does not have the Spirit of Christ, they do not belong to Christ. But if Christ is in you, then even though your body is subject to death because of sin, the Spirit gives life because of righteousness. And if the Spirit of him who raised Jesus from the dead is living in you, he who raised Christ from the dead will also give life to your mortal bodies because of his Spirit who lives in you.
Romans 8:12-13
Therefore, brothers and sisters, we have an obligation—but it is not to the flesh, to live according to it. For if you live according to the flesh, you will die; but if by the Spirit you put to death the misdeeds of the body, you will live.
Romans 8:14-15
For those who are led by the Spirit of God are the children of God. The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, "Abba, Father."
Romans 8:16-17
The Spirit himself testifies with our spirit that we are God's children. Now if we are children, then we are heirs—heirs of God and co-heirs with Christ, if indeed we share in his sufferings in order that we may also share in his glory.
Romans 8:18-21
I consider that our present sufferings are not worth comparing with the glory that will be revealed in us. For the creation waits in eager expectation for the children of God to be revealed. For the creation was subjected to frustration, not by its own choice, but by the will of the one who subjected it, in hope that the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God.
Romans 8:22-25
We know that the whole creation has been groaning as in the pains of childbirth right up to the present time. Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies. For in this hope we were saved. But hope that is seen is no hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently.
Romans 8:26-27
In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God.
Romans 8:28-30
And we know that in all things God works for the good of those who love him, who have been called according to his purpose. For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters. And those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.
Romans 8:31-32
What, then, shall we say in response to these things? If God is for us, who can be against us? He who did not spare his own Son, but gave him up for us all—how will he not also, along with him, graciously give us all things?
Romans 8:33-39
Who will bring any charge against those whom God has chosen? It is God who justifies. Who then is the one who condemns? No one. Christ Jesus who died—more than that, who was raised to life—is at the right hand of God and is also interceding for us. Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword? As it is written: "For your sake we face death all day long; we are considered as sheep to be slaughtered." No, in all these things we are more than conquerors through him who loved us. For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.
John 15:1-4
"I am the true vine, and my Father is the gardener. He cuts off every branch in me that bears no fruit, while every branch that does bear fruit he prunes so that it will be even more fruitful. You are already clean because of the word I have spoken to you. Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.
John 15:5-8
"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing. If you do not remain in me, you are like a branch that is thrown away and withers; such branches are picked up, thrown into the fire and burned. If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you. This is to my Father's glory, that you bear much fruit, showing yourselves to be my disciples.
John 15:9-11
"As the Father has loved me, so have I loved you. Now remain in my love. If you keep my commands, you will remain in my love, just as I have kept my Father's commands and remain in his love. I have told you this so that my joy may be in you and that your joy may be complete.
John 15:12-17
My command is this: Love each other as I have loved you. Greater love has no one than this: to lay down one's life for one's friends. You are my friends if you do what I command. I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you. You did not choose me, but I chose you and appointed you so that you might go and bear fruit—fruit that will last—and so that whatever you ask in my name the Father will give you. This is my command: Love each other.
John 15:18-19
"If the world hates you, keep in mind that it hated me first. If you belonged to the world, it would love you as its own. As it is, you do not belong to the world, but I have chosen you out of the world. That is why the world hates you.
John 15:20-25
Remember what I told you: 'A servant is not greater than his master.' If they persecuted me, they will persecute you also. If they obeyed my teaching, they will obey yours also. They will treat you this way because of my name, for they do not know the one who sent me. If I had not come and spoken to them, they would not be guilty of sin; but now they have no excuse for their sin. Whoever hates me hates my Father as well. If I had not done among them the works no one else did, they would not be guilty of sin. As it is, they have seen, and yet they have hated both me and my Father. But this is to fulfill what is written in their Law: 'They hated me without reason.'
Galatians 5:13-15
You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. For the entire law is fulfilled in keeping this one command: "Love your neighbor as yourself." If you bite and devour each other, watch out or you will be destroyed by each other.
Galatians 5:16-18
So I say, walk by the Spirit, and you will not gratify the desires of the flesh. For the flesh desires what is contrary to the Spirit, and the Spirit what is contrary to the flesh. They are in conflict with each other, so that you are not to do whatever you want. But if you are led by the Spirit, you are not under the law.
Galatians 5:19-21
The acts of the flesh are obvious: sexual immorality, impurity and debauchery; idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions and envy; drunkenness, orgies, and the like. I warn you, as I did before, that those who live like this will not inherit the kingdom of God.
Galatians 5:22-26
But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law. Those who belong to Christ Jesus have crucified the flesh with its passions and desires. Since we live by the Spirit, let us keep in step with the Spirit. Let us not become conceited, provoking and envying each other.
Matthew 28:18-20
"All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."
2 Timothy 2:22-26
Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the Lord out of a pure heart. Don't have anything to do with foolish and stupid arguments, because you know they produce quarrels. And the Lord's servant must not be quarrelsome but must be kind to everyone, able to teach, not resentful. Opponents must be gently instructed, in the hope that God will grant them repentance leading them to a knowledge of the truth, and that they will come to their senses and escape from the trap of the devil, who has taken them captive to do his will.
Ephesians 4:11-15
So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ. Then we will no longer be infants, tossed back and forth by the waves, and blown here and there by every wind of teaching and by the cunning and craftiness of people in their deceitful scheming. Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ.
Colossians 2:6-7
So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.
Matthew 13:23
But the seed falling on good soil refers to someone who hears the word and understands it. This is the one who produces a crop, yielding a hundred, sixty or thirty times what was sown."
James 1:2-8
Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything. If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you. But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind. That person should not expect to receive anything from the Lord. Such a person is double-minded and unstable in all they do.
James 1:9-11
Believers in humble circumstances ought to take pride in their high position. But the rich should take pride in their humiliation—since they will pass away like a wild flower. For the sun rises with scorching heat and withers the plant; its blossom falls and its beauty is destroyed. In the same way, the rich will fade away even while they go about their business.
James 1:12
Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.
James 1:17-18
Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows. He chose to give us birth through the word of truth, that we might be a kind of firstfruits of all he created.
James 1:19-20
My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.
James 2:17
In the same way, faith by itself, if it is not accompanied by action, is dead.
James 2:18-19
But someone will say, "You have faith; I have deeds." Show me your faith without deeds, and I will show you my faith by my deeds. You believe that there is one God. Good! Even the demons believe that—and shudder.
James 2:26
As the body without the spirit is dead, so faith without deeds is dead.
James 3:5-6
Likewise, the tongue is a small part of the body, but it makes great boasts. Consider what a great forest is set on fire by a small spark. The tongue also is a fire, a world of evil among the parts of the body. It corrupts the whole body, sets the whole course of one's life on fire, and is itself set on fire by hell.
James 3:9-12
With the tongue we praise our Lord and Father, and with it we curse human beings, who have been made in God's likeness. Out of the same mouth come praise and cursing. My brothers and sisters, this should not be. Can both fresh water and salt water flow from the same spring? My brothers and sisters, can a fig tree bear olives, or a grapevine bear figs? Neither can a salt spring produce fresh water.
James 3:13-18
Who is wise and understanding among you? Let them show it by their good life, by deeds done in the humility that comes from wisdom. But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth. Such "wisdom" does not come down from heaven but is earthly, unspiritual, demonic. For where you have envy and selfish ambition, there you find disorder and every evil practice. But the wisdom that comes from heaven is first of all pure; then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere. Peacemakers who sow in peace reap a harvest of righteousness.
James 4:17
If anyone, then, knows the good they ought to do and doesn't do it, it is sin for them.
James 4:2-3
You desire but do not have, so you kill. You covet but you cannot get what you want, so you quarrel and fight. You do not have because you do not ask God. When you ask, you do not receive, because you ask with wrong motives, that you may spend what you get on your pleasures.
James 4:4-8
You adulterous people, don't you know that friendship with the world means enmity against God? Therefore, anyone who chooses to be a friend of the world becomes an enemy of God. Or do you think Scripture says without reason that he jealously longs for the spirit he has caused to dwell in us? But he gives us more grace. That is why Scripture says: "God opposes the proud but shows favor to the humble." Submit yourselves, then, to God. Resist the devil, and he will flee from you. Come near to God and he will come near to you.
James 4:10
Humble yourselves before the Lord, and he will lift you up.
James 4:11-12
Brothers and sisters, do not slander one another. Anyone who speaks against a brother or sister or judges them speaks against the law and judges it. When you judge the law, you are not keeping it, but sitting in judgment on it. There is only one Lawgiver and Judge, the one who is able to save and destroy. But you—who are you to judge your neighbor?
James 4:13-17
Now listen, you who say, "Today or tomorrow we will go to this or that city, spend a year there, carry on business and make money." Why, you do not even know what will happen tomorrow. What is your life? You are a mist that appears for a little while and then vanishes. Instead, you ought to say, "If it is the Lord's will, we will live and do this or that." As it is, you boast in your arrogant schemes. All such boasting is evil. If anyone, then, knows the good they ought to do and doesn't do it, it is sin for them.
James 5:13-16
Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise. Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven. Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.`;

function parseVerses(raw: string): Verse[] {
  const lines = raw.split('\n').filter(line => line.trim());
  const verses: Verse[] = [];
  
  for (let i = 0; i < lines.length; i += 2) {
    if (i + 1 < lines.length) {
      const reference = lines[i].trim();
      const text = lines[i + 1].trim();
      // Create a unique ID from reference
      const id = reference.toLowerCase().replace(/[^a-z0-9]/g, '-');
      verses.push({
        id,
        reference,
        text,
        length: text.length
      });
    }
  }
  
  return verses;
}

// Parse and sort by text length (shortest first = easier)
export const verses: Verse[] = parseVerses(rawVerses).sort((a, b) => a.length - b.length);

export function getVerseById(id: string): Verse | undefined {
  return verses.find(v => v.id === id);
}
