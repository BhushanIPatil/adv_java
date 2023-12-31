import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import './Card1.css';
import './style.css';
import { Button, Modal } from 'react-bootstrap';

// import Turmeric from './images/Turmeric.jpg';
// import chili from './images/chili.jpg';
// import Ginger from './images/Ginger.png';
// import Shiitake from './images/Shiitake.jpg';
// import Eucalyptus from './images/Eucalyptus.jpg';
// import Lavender from './images/Lavender.jpg';
// import mint from './images/mint.jpg';
// import fenugreek from './images/Fenugreek.jpg';
// import magnesium from './images/magnesium.png';

const articles = [
  // for first row
  {
    moreInfo: `Who hasn’t heard of turmeric by now? Turmeric has been used, primarily in South Asia as a part of Ayurvedic medicine, for almost 4,000 years. When it comes to proven medicinal purposes,
    the golden spice may be best for treating pain — specifically pain associated with inflammation. Several studies have found that curcumin is responsible for turmeric’s “wow” factor. In one study,
    people with arthritis painTrusted Source noted that their pain levels were more reduced after taking 500 milligrams(mg) of curcumin than 50 mg of diclofenac sodium, an anti-inflammatory drug. Other
    studiesTrusted Source back up this pain relief claim as well, noting that turmeric extract was as effective as ibuprofen for treating painTrusted Source in patients with knee osteoarthritis. Don’t go
    grinding turmeric — which stains heavily! — for immediate relief though. The amount of curcumin in turmeric is at most 3 percent, meaning you’re better off taking curcumin supplements for relief.
    That’s not to say a soothing turmeric latte won’t help. It’s suggested that 2 to 5 grams(g) of the spice may still provide some benefits. Just be sure you add black pepper to boost the absorption.`
  }, 

  {
    moreInfo: `This active component of chili peppers has a long history of use in folk medicine and has slowly become more accepted outside of homeopathy. Now, capsaicin is a popular topical ingredient
    for managing pain. It works by causing an area of the skin to get hot, before eventually turning numb. Today, you can get a prescription capsaicin patch called Qutenza, which relies on very high level
    of capsaicin — 8 percentTrusted Source — to work. So, when it comes to sore muscles or generalized body pain that won’t leave you alone, and you have some hot peppers or cayenne pepper on hand? Make
    some capsaicin cream. For an extra fancy feel, whip your coconut oil with a hand mixer so that it becomes light and fluffy. It’s important to test your reaction to the compound before using too extensively.
    You may also use jalapeño peppers, but the amount of heat may vary depending on the pepper. Never use this cream around the face or eyes, and be sure to wear gloves during application.`
  },
  {
    moreInfo: `It’s almost law to try ginger when you have a cold, sore throat, or are experiencing morning sickness and nausea. Making a cup is pretty standard: Grate it in your tea for a stronger effect.
    But the other benefit of ginger that goes less noticed is its effectiveness as an anti-inflammatory. The next time you feel a little queasy and have a headache, try ginger. Ginger works differently than
    other pain relievers that target inflammation. It blocks the formation of certain types of inflammatory compounds and breaks down existing inflammation through an antioxidant that interacts with acidity
    in the fluid between joints. Its anti-inflammatory effectsTrusted Source come without the risks of nonsteroidal anti-inflammatory drugs (NSAIDs).`
  },

  // for second row
  {
    moreInfo: `Lentinan, also known as AHCC or active hexose correlated compound, is an extract of shiitake mushrooms. It promotes antioxidant and anti-inflammatory effectsTrusted Source at a cellular level.
    A petri dish studyTrusted Source suggests that AHCC can help with inhibiting breast cancer cells, and its interaction with the immune system might help fight cancerTrusted Source by improving chemo-weakened
    immune systems. If you’ve found bone broth to be comforting, throw in a few chopped shiitake mushrooms next time. One studyTrusted Source found that eating 5 to 10 g of shiitake mushrooms every day helped
    boost human immune systems after four weeks.`
  },
  {
    moreInfo: `Eucalyptus oil has a component called 1,8-cineole, which may help relieve pain. The component has a morphine-like effect when tested on miceTrusted Source. And for the essential oils fans, you’re
    in luck. Eucalyptus oil has been shown to relieve body pains even after inhalation. For lovers of Vick’s VapoRub, who have been inhaling it as a home remedy for congestion, well, eucalyptus oil is your magic
    ingredient. However, inhaling eucalyptus oil isn’t for everyone. This oil can trigger asthma and may be harmful to pets. It may also lead to respiratory distress in infants.`
  },
  {
    moreInfo: `Migraine attacks, headaches, anxiety, and general feelings of (dis)stress? Inhaling lavender can help with that. Studies shows that lavender helps with: migraine lowering anxiety or restlessness
    memory troubles when stressed and sleepTrusted Source Drinking lavender tea or keeping a satchel around for times of high stress is one way to reduce anxiety and relax the mind and body. As an essential oil,
    it can also be combined with other plant oils for aromatherapy. One studyTrusted Source found that in combination with sage and rose, lavender was helpful in relieving premenstrual syndrome (PMS) symptoms.`,

    cautionTitle: `CAUTION :`,

    caution: `While lavender is a powerful plant, it can come with side effects. Directly applying essential oil without diluting it may irritate the skin or potentially affect hormone levels. Always diffuse
    and dilute essential oils before use.`
  },

  // for third row
  {
    moreInfo: `Mint, as common as it sounds, isn’t simple. Depending on the type, it can provide different uses and benefits. For pain, you’ll want to look for wintergreen, which has methyl salicylate, a compound
    that may work similarly to capsaicin. Applying it can feel like a cool “burn” before the numbing effect takes place. This effect helps with joint and muscle pain. The other mint type that’s commonly used in folk
    medicine is peppermint. An ingredient in many different cures, peppermint has been found to be especially effective in helping treat irritable bowel syndrome (IBS) symptoms. Studies show that along with fiber,
    it helps reduce spasmsTrusted Source, as well as diarrhea and abdominal painTrusted Source associated with IBS. Peppermint activates an anti-pain channel in the colon, which reduces inflammatory pain in the
    digestive tract. This most likely accounts for its effectiveness in treating IBS. Beyond digestion and stomach troubles, a peppermint oil capsule or tea may also help with headaches, colds, and other body
    discomforts Trusted Source.`
  },
  {
    moreInfo: `Fenugreek seeds are often used in cooking in the Mediterranean and Asia, but this spice, which is similar to cloves, has several medicinal uses. When made into a tea, fenugreek can help with milk
    production for breastfeedingTrusted Source. For people experiencing diarrhea, fenugreek is a great water-soluble fiberTrusted Source to help firm up stools. If you’re constipated, you definitely want to avoid
    these seeds. As a supplement, fenugreek has also been found to lower blood sugarTrusted Source, making it a popular aid for people with diabetes. Fenugreek’s role here is due in part to its high fiber content,
    which can help with improving insulin functionTrusted Source. Fenugreek in cooking Fenugreek is often ground and used in curries, dry rubs, and in teas. You can add it to your yogurt for a small savory taste,
    or sprinkle it over your salads.`
  },
  {
    moreInfo: `Feeling muscle pains? Fatigue? More migraine attacks? More likely to slip into a numbed emotional state than usual? It might be a magnesium deficiency. While magnesium is often talked about in terms
    of the growth and maintenance of bones, it’s also essential in nerve and muscle function. But studies show that almost half of the U.S. population doesn’t get their required amount of magnesiumTrusted Source.
    So, if you’ve ever complained of these symptoms and got a slightly terse “eat spinach” response in return, know that it’s not completely unfounded. Spinach, almonds, avocados, and even dark chocolate are all
    rich in magnesium. You don’t necessarily need a supplement to treat magnesium deficiency. When it comes to mood, magnesium may also help. Magnesium works with the parasympathetic nervous system, which keeps you
    calm and relaxed, suggesting that having a magnesium-rich diet might aid in stress relief. Foods high in magnesium lentils, beans, chickpeas, and peas tofu whole grains fatty fish, like salmon, mackerel, and
    halibut bananas`
  }
];

export function Card1()
{
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleExploreMore = (articleIndex) => {
    setSelectedArticle(articles[articleIndex]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5 custom container-card">
      <h1 id="rel-art" className="text-center">Related Articles</h1>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {/* first row*/}
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {/* first row first column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={0} class="col">
            <div className="card">
              {/* <img src={Turmeric} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Turmeric</h5>
                <p className="card-text">Who hasn’t heard of turmeric by now? Turmeric has been used, primarily in South Asia as a part of Ayurvedic medicine, for almost 4,000 years.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" className="btn btn-primary" onClick={() => handleExploreMore(0)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* first row second column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={1} class="col">
            <div className="card">
              {/* <img src={chili} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Chili</h5>
                <p className="card-text">This active component of chili peppers has a long history of use in folk medicine and has slowly become more accepted outside of homeopathy.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(1)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* first row Third column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={2} class="col">
            <div className="card">
              {/* <img src={Ginger} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Ginger</h5>
                <p className="card-text">It’s almost law to try ginger when you have a cold, sore throat, or are experiencing morning sickness and nausea.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(2)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {/* second row*/}
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {/* second row first column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={3} className="col">
            <div className="card">
              {/* <img src={Shiitake} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Shiitake</h5>
                <p className="card-text">Lentinan, also known as AHCC or active hexose correlated compound, is an extract of shiitake mushrooms. It promotes antioxidant and anti-inflammatory effectsTrusted Source at a cellular level.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(3)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* second row second column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={4} class="col">
            <div className="card">
              {/* <img src={Eucalyptus} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Eucalyptus</h5>
                <p className="card-text">Eucalyptus oil has a component called 1,8-cineole, which may help relieve pain. The component has a morphine-like effect when tested on miceTrusted Source.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(4)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* second row third column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={5} class="col">
            <div className="card">
              {/* <img src={Lavender} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Lavender</h5>
                <p className="card-text">Migraine attacks, headaches, anxiety, and general feelings of (dis)stress? Inhaling lavender can help with that. migraine, lowering anxiety or restlessness, memory troubles when stressed and sleep</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(5)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {/* third row*/}
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {/* third row first column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={6} className="col">
            <div className="card">
              {/* <img src={mint} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Mint</h5>
                <p className="card-text">Mint, as common as it sounds, isn’t simple. Depending on the type, it can provide different uses and benefits.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(6)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* third row second column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={7} class="col">
            <div className="card">
              {/* <img src={fenugreek} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Fenugreek</h5>
                <p className="card-text">Fenugreek seeds are often used in cooking in the Mediterranean and Asia, but this spice, which is similar to cloves, has several medicinal uses.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(7)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}

        {/* third row third column */}
        {articles.slice(0, 1).map((article, index) => (
          <div key={8} class="col">
            <div className="card">
              {/* <img src={magnesium} className="card-img-top" /> */}
              <div className="card-body">
                <h5 className="card-title-spl">Magnesium</h5>
                <p className="card-text">Feeling muscle pains? Fatigue? More likely to slip into a numbed emotional state than usual? It might be a magnesium deficiency.</p>
              </div>
              <div className="d-flex justify-content mb-4 mt-2 px-3">
                <Button id="button" class="btn btn-primary" onClick={() => handleExploreMore(8)}>Read Full Article...</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      <div>
        <h2 className="text-center mt-2 mb-3" id="After-heading">Make sure to use home remedies correctly</h2>
      </div>
      <div>
        <p id="After-heading-text">While most of these natural remedies don’t have any significant side effects, they may be harmful if used in excess amounts.
          Certain people may also be more sensitive to dosage amounts, so if you’re on any medication or live with a condition that’s
          affected by your diet, talk to a doctor before consuming these foods regularly. And if you have an allergic reaction or worsening
          symptoms from any home remedy, speak to a doctor right away. Keep in mind that home remedies may not always be safe and effective
          for you. While these are backed by scientific studies, a single study or clinical trial doesn’t always cover diverse communities
          or bodies. What research notes as beneficial may not always work for you. Many of the remedies we listed above are ones we grew
          up with, ones that families have passed down and brought us up on since we were children, and we look forward to falling back on
          them when we need the comfort.</p>
      </div>

      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="more-info">More information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedArticle && (
            <div>
              <p id="more-info-article">{selectedArticle.moreInfo}</p>
              {selectedArticle.cautionTitle && (
                <>
                  <p id="more-info-caution-title">{selectedArticle.cautionTitle}</p>
                  <p id="more-info-caution">{selectedArticle.caution}</p>
                </>
              )}

              
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button id="button" class="btn btn-primary" variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
};

export default Card1;